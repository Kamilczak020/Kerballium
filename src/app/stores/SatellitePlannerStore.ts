import { action, computed, observable } from 'mobx';
import { SatellitePlannerModel } from '../models';
import { IDataStore } from './IPlannerStore';

export class SatellitePlannerStore implements IDataStore {
    @observable
    public state: SatellitePlannerModel;

    constructor(fixture: SatellitePlannerModel) {
        this.state = fixture;
    }
}
