import * as THREE from 'three';
import { RenderObject } from './RenderObject';
import { CameraController } from './CameraController';

export class RenderController {
    private camera: THREE.Camera;
    private cameraController: CameraController;
    private renderer: THREE.Renderer;
    private objects: RenderObject[];

    /**
     * Sets the current renderer object.
     */
    public set Renderer(renderer: THREE.Renderer) {
        this.renderer = renderer;
        this.cameraController.Renderer = renderer;
    }

    /**
     * Sets the current camera object.
     */
    public set Camera(camera: THREE.Camera) {
        this.camera = camera;
        this.cameraController.Camera = camera;
    }

    /**
     * Adds a singular object to the collection.
     * @param object Object to be added.
     */
    public addObject(object: RenderObject) {
        this.objects.push(object);
    }

    /**
     * Adds an array of objects to the collection.
     * @param objects Objects to be added.
     */
    public addObjects(objects: RenderObject[]) {
        this.objects.concat(objects);
    }

    public constructor (camera: THREE.Camera, renderer: THREE.Renderer, objects: RenderObject[] = []) {
        this.camera = camera;
        this.renderer = renderer;
        this.objects = objects;
        this.cameraController = new CameraController(camera, renderer);
    }
}
