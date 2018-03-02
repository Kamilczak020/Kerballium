import { observable } from 'mobx';
import { IPlannerModel } from './IPlannerModel';

export class TripPlannerModel implements IPlannerModel {
    @observable
    public isActive: boolean;

    constructor() {
        this.isActive = false;
    }
}
