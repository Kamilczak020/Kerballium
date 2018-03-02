import { observable } from 'mobx';
import { IPlannerModel } from './IPlannerModel';

export class SatellitePlannerModel implements IPlannerModel {
    @observable
    public isActive: boolean;

    constructor() {
        this.isActive = false;
    }
}
