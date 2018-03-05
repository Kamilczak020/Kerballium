import { action, computed, observable } from 'mobx';
import { UIModel, ApplicationMode } from '../models';
import { IDataStore } from './IPlannerStore';
import { STORE_PLANNER_SATELLITE, STORE_INFORMATION_PLANET, STORE_PLANNER_TRIP } from '../constants/stores';
import { inject, observer } from 'mobx-react';

export class UIStore {
    @observable
    public uiState: UIModel;

    @action
    public toggleMode(mode: ApplicationMode) {
        if (this.uiState.appMode !== mode) {
            this.uiState.appMode = mode;
        } else {
            this.uiState.appMode = ApplicationMode.None;
        }
    }

    constructor(fixture: UIModel) {
        this.uiState = fixture;
    }
}
