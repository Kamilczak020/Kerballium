import * as THREE from 'three';
import { SceneControllerBase } from './SceneControllerBase';
import { CelestialBody } from './CelestialBody';

export class SatellitePlannerSceneController extends SceneControllerBase {
    public constructor(canvas: HTMLCanvasElement) {
        super(canvas);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: '#433F81' });
        const cube = new THREE.Mesh(geometry, material);
        const cube2 = new THREE.Mesh(geometry, material);

        cube2.position.x = 10;

        this.scene.add(cube);
        this.scene.add(cube2);

        this.camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height,	0.1, 1000);
        this.camera.position.z = 4;

        this.cameraTarget = cube;
    }
}
