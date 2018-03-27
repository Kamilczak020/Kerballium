import * as THREE from 'three';

export abstract class SceneObject extends THREE.Mesh {
    public name: string;

    public constructor(name: string, geometry: THREE.Geometry, material: THREE.Material) {
        super(geometry, material);

        this.name = name;
    }

    public abstract animate(): void;
}
