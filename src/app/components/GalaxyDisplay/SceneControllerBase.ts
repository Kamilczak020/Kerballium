import * as THREE from 'three';
import { SceneObject } from './SceneObject';

/**
 * ALL SCENE CONTROLLER INTERFACES SHOULD DERIVER FROM THIS ONE.
 *
 * This defines the basic functionality of the Scene Controller,
 * and are further used by the abstract Scene component.
 */
export interface ISceneController {
    setSize(width: number, height: number): void;
    panCamera(x1: number, x2: number, y1: number, y2: number): void;
    rotateCamera(x1: number, x2: number, y1: number, y2: number): void;
    zoomCamera(delta: number): void;
    startScene(): void;
    stopScene(): void;
}

/**
 *  ALL SCENE CONTROLLERS SHOULD DERIVE FROM THIS ONE.
 *
 * This class is meant to serve as a backbone for a helper controller for all the scene behaviors.
 * It features an animation loop, that requests render frames and animates all objects
 * that are attached to the scene.
 *
 * It contains a camera controller, allowing for Pan, Zoom and Rotation (arcball) of the camera.
 *
 * It stores all the necessary scene objects and automatically binds the renderable ones to the scene.
 */
export abstract class SceneControllerBase implements ISceneController {
    private sceneSize: THREE.Vector3;
    private invertCoefficientX: 1 | -1 = 1;
    private invertCoefficientY: 1 | -1 = 1;
    private EPS = 0.000001;

    protected camera: THREE.PerspectiveCamera;
    protected cameraTarget: THREE.Object3D;
    protected renderer: THREE.Renderer;
    protected scene: THREE.Scene;
    protected sceneObjects: SceneObject[];
    protected frameId: number;

    protected cameraRotateSpeed = 1;
    protected minAzimuthAngle = -Infinity;
    protected maxAzimuthAngle = Infinity;
    protected minPolarAngle = 0;
    protected maxPolarAngle = Math.PI;

    public set InvertMouseX(value: boolean) {
        this.invertCoefficientX = value ? -1 : 1;
    }

    public set InvertMouseY(value: boolean) {
        this.invertCoefficientY = value ? -1 : 1;
    }

    public constructor(canvas: HTMLCanvasElement) {
        this.camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 50, 2000);
        this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        this.scene = new THREE.Scene();
        this.sceneSize = new THREE.Vector3(10, 10, 10);
    }

    /**
     * Update camera and renderer (thus, its underlying canvas DOM object)
     * to work with the new component size.
     *
     * @param width Canvas width
     * @param height Canvas height
     */
    public setSize(width: number, height: number) {
        // updateProjectionMatrix after changing camera properties.
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(width, height);
    }

    /**
     * Pans the camera, based on the position change.
     * After translating the camera, updates its' projection matrix.
     *
     * Y axis is inverted by default, because it feels more natural that way.
     *
     * @param x1 Start X position
     * @param x2 End X position
     * @param y1 Start Y position
     * @param y2 End Y position
     */
    public panCamera(x1: number, x2: number, y1: number, y2: number) {
        const offsetX = this.sceneSize.x / this.renderer.domElement.width * (x2 - x1) * this.invertCoefficientX;
        const offsetY = this.sceneSize.y / this.renderer.domElement.height * (y2 - y1) * -this.invertCoefficientY;

        this.camera.translateOnAxis(new THREE.Vector3(1, 0, 0), offsetX);
        this.camera.translateOnAxis(new THREE.Vector3(0, 1, 0), offsetY);
        this.camera.updateProjectionMatrix();
    }

    /**
     * Rotates the camera using the Arcball rotation technique to translate 2D mouse coords
     * into a representation of a 3d rotation.
     *
     * @param x1 Start X position
     * @param x2 End X position
     * @param y1 Start Y position
     * @param y2 End Y postion
     */
    public rotateCamera(x1: number, x2: number, y1: number, y2: number) {
        const thetaDelta = -(2 * Math.PI * (x2 - x1) / this.renderer.domElement.width * this.cameraRotateSpeed) * this.invertCoefficientX;
        const phiDelta = -(2 * Math.PI * (y2 - y1) / this.renderer.domElement.height * this.cameraRotateSpeed) * this.invertCoefficientY;

        const offset = new THREE.Vector3().copy(this.camera.position).sub(this.cameraTarget.position);

        let theta = Math.atan2(offset.x, offset.z) + thetaDelta;
        let phi = Math.atan2(Math.sqrt(offset.x * offset.x + offset.z * offset.z), offset.y) + phiDelta;

        // Limit angles
        theta = Math.max(this.minAzimuthAngle, Math.min(this.maxAzimuthAngle, theta));
        phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, phi));

        phi = Math.max(this.EPS, Math.min(Math.PI - this.EPS, phi));

        const radius = offset.length();

        offset.x = radius * Math.sin(phi) * Math.sin(theta);
        offset.y = radius * Math.cos(phi);
        offset.z = radius * Math.sin(phi) * Math.cos(theta);

        this.camera.position.copy(this.cameraTarget.position).add(offset);
        this.camera.lookAt(this.cameraTarget.position);
    }

    /**
     * Translates the camera along its' forward axis, effectively zooming into the scene.
     *
     * @param delta distance to zoom
     */
    public zoomCamera(delta: number) {
        const offsetZ = this.scene.scale.x / 50 * delta;
        this.camera.translateOnAxis(new THREE.Vector3(0, 0, 1), offsetZ);
        this.camera.updateProjectionMatrix();
    }

    /**
     * Launches the animation loop.
     */
    public startScene() {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(() => this.animateFrame());
        }
    }

    /**
     * Stops the animation loop.
     */
    public stopScene() {
        cancelAnimationFrame(this.frameId);
    }

    /**
     * Runs animate() on all the objects that are bound to the scene and renders them.
     * Requests another animation frame, until is stopped.
     */
    private animateFrame() {
        this.renderer.render(this.scene, this.camera);

        // All animating done, request new frame
        this.frameId = requestAnimationFrame(() => this.animateFrame());
    }
}
