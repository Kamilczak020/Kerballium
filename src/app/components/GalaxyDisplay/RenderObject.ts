import * as THREE from 'three';

export class RenderObject {
    private geometry: THREE.Geometry;
    private material: THREE.Material;
    private mesh: THREE.Mesh;

    public Position: THREE.Vector3;
    public Rotation: THREE.Vector3;

    public get Geometry(): THREE.Geometry {
        return this.geometry;
    }

    public get Material(): THREE.Material {
        return this.material;
    }

    public get Mesh(): THREE.Mesh {
        return this.mesh;
    }

    public constructor(geometry: THREE.Geometry, material: THREE.Material) {
        this.geometry = geometry;
        this.material = material;

        this.mesh = new THREE.Mesh(geometry, material);
    }
}
