import { action, computed, observable } from 'mobx';
import { TripPlannerModel } from '../models';
import { IPlannerStore } from './IPlannerStore';
import { STORE_PLANNER_TRIP } from '../constants/stores';

export class TripPlannerStore implements IPlannerStore {
    @observable
    public state: TripPlannerModel;

    @observable
    public type: string;

    constructor(fixture: TripPlannerModel) {
        this.state = fixture;
        this.type = STORE_PLANNER_TRIP;
    }
}
