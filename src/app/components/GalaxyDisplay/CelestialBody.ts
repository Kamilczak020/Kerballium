import * as THREE from 'three';
import { SceneObject } from './SceneObject';
import { Orbit } from './Orbit';

export class CelestialBody extends SceneObject {
    private orbit?: Orbit;
    private primary?: CelestialBody;
    private rotationSpeed?: number;

    public constructor(name: string, primary?: CelestialBody) {
        const geometry = new THREE.SphereGeometry(100);
        const material = new THREE.MeshBasicMaterial({ color: '#433F81' });
        super(name, geometry, material);

        this.primary = primary;
    }

    public animate() {
        return;
    }
}
