import { action, computed, observable } from 'mobx';
import { UIModel } from '../models/UIModel';

export class UIStore {
    @observable
    public uiState: UIModel;

    @action
    public toggleDrawer(): void {
        this.uiState.drawerOpen = !this.uiState.drawerOpen;
    }

    constructor(fixture: UIModel) {
        this.uiState = fixture;
    }
}
