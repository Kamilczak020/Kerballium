import * as THREE from 'three';
import { RenderObject } from './RenderObject';

export class Planet extends RenderObject {
    public OrbitEntity: RenderObject;
    public OrbitEccentricity: number;
    public Periapsis: number;
    public Apoapsis: number;
    public Radius: number;
}
