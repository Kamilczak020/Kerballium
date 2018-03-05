import { action, computed, observable } from 'mobx';
import { PlanetInformationModel } from '../models';
import { IDataStore } from './IPlannerStore';

export class PlanetInformationStore implements IDataStore {
    @observable
    public state: PlanetInformationModel;

    constructor(fixture: PlanetInformationModel) {
        this.state = fixture;
    }
}
