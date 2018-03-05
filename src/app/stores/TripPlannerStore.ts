import { action, computed, observable } from 'mobx';
import { TripPlannerModel } from '../models';
import { IDataStore } from './IPlannerStore';

export class TripPlannerStore implements IDataStore {
    @observable
    public state: TripPlannerModel;

    constructor(fixture: TripPlannerModel) {
        this.state = fixture;
    }
}
