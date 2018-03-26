import * as THREE from 'three';
import { RenderObject } from './RenderObject';

export class Planet extends RenderObject {
    public OrbitEntity: RenderObject;
    public SemimajorAxis: number;
    public OrbitalEccentricity: number;
    public OrbitalInclination: number;
    public PeriapsisArgument: number;
    public AscendingNodeLongtitude: number;
    public Periapsis: number;
    public Apoapsis: number;
    public SiderealOrbitalPeriod: number;

    public constructor(geometry: THREE.Geometry, material: THREE.Material) {
        super(geometry, material);
    }
}
