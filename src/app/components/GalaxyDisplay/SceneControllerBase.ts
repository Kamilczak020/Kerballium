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

    protected camera: THREE.PerspectiveCamera;
    protected cameraTarget: THREE.Object3D;
    protected renderer: THREE.Renderer;
    protected scene: THREE.Scene;
    protected sceneObjects: SceneObject[];
    protected frameId: number;

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
     * @param x1 Start X position
     * @param x2 End X position
     * @param y1 Start Y position
     * @param y2 End Y position
     */
    public panCamera(x1: number, x2: number, y1: number, y2: number) {
        const cameraRight = new THREE.Vector3().crossVectors( this.camera.getWorldDirection(), this.camera.up);
        const offsetX = this.sceneSize.x / this.renderer.domElement.width * (x2 - x1);
        const offsetY = this.sceneSize.y / this.renderer.domElement.height * (y2 - y1);

        this.camera.translateOnAxis(cameraRight, offsetX);
        this.camera.translateOnAxis(this.camera.up, offsetY);
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
        const vectorToRotate = new THREE.Vector3().subVectors(this.camera.position, this.cameraTarget.position);
    }

    /**
     * Translates the camera along its' forward axis, effectively zooming into the scene.
     *
     * @param delta distance to zoom
     */
    public zoomCamera(delta: number) {
        const offsetZ = this.scene.scale.x / 50 * delta;
        this.camera.translateOnAxis(this.camera.getWorldDirection(), delta);
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
