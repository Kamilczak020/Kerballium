import { action, computed, observable } from 'mobx';
import { SatellitePlannerModel } from '../models';
import { IPlannerStore } from './IPlannerStore';
import { STORE_PLANNER_SATELLITE } from '../constants/stores';

export class SatellitePlannerStore implements IPlannerStore {
    @observable
    public state: SatellitePlannerModel;

    @observable
    public type: string;

    constructor(fixture: SatellitePlannerModel) {
        this.state = fixture;
        this.type = STORE_PLANNER_SATELLITE;
    }
}
