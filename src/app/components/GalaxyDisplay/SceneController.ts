import * as THREE from 'three';
import { RenderableObject } from 'three';

export interface ISceneController {
    setSize(width: number, height: number): void;
    panCamera(x1: number, x2: number, y1: number, y2: number);
    rotateCamera(x1: number, x2: number, y1: number, y2: number);
    zoomCamera(delta: number);
}

export abstract class SceneControllerBase implements ISceneController {
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.Renderer;
    private scene: THREE.Scene;
    private cameraTarget: THREE.Object3D;

    public constructor(canvas: HTMLCanvasElement) {
        this.camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 50, 2000);
        this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        this.scene = new THREE.Scene();
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

    public panCamera(x1: number, x2: number, y1: number, y2: number) {
        const cameraRight = new THREE.Vector3().crossVectors(this.camera.up, this.camera.getWorldDirection());
        const offsetX = this.scene.scale.x / this.renderer.domElement.width * (x2 - x1);
        const offsetY = this.scene.scale.x / this.renderer.domElement.height * (y2 - y1);

        this.camera.translateOnAxis(cameraRight, offsetX);
        this.camera.translateOnAxis(this.camera.up, offsetY);
        this.camera.updateProjectionMatrix();
    }

    public rotateCamera(x1: number, x2: number, y1: number, y2: number) {
        const vectorToRotate = new THREE.Vector3().subVectors(this.camera.position, this.cameraTarget.position);
    }

    public zoomCamera(delta: number) {
        const offsetZ = this.scene.scale.x / 50 * delta;
        this.camera.translateOnAxis(this.camera.getWorldDirection(), delta);
        this.camera.updateProjectionMatrix();
    }
}
