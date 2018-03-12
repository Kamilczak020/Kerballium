import * as THREE from 'three';

export class CameraController {
    private camera: THREE.Camera;
    private renderer: THREE.Renderer;

    /**
     * Sets the current camera object.
     */
    public set Camera(camera: THREE.Camera) {
        this.camera = camera;
    }

    /**
     * Sets the current renderer object.
     */
    public set Renderer(renderer: THREE.Renderer) {
        this.renderer = renderer;
    }

    public constructor(camera: THREE.Camera, renderer: THREE.Renderer) {
        this.camera = camera;
        this.renderer = renderer;
    }
}
