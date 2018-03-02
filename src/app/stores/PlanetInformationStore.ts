import { action, computed, observable } from 'mobx';
import { PlanetInformationModel } from '../models';
import { IPlannerStore } from './IPlannerStore';
import { STORE_INFORMATION_PLANET } from '../constants/stores';

export class PlanetInformationStore implements IPlannerStore {
    @observable
    public state: PlanetInformationModel;
    
    @observable
    public type: string;

    constructor(fixture: PlanetInformationModel) {
        this.state = fixture;
        this.type = STORE_INFORMATION_PLANET;
    }
}
