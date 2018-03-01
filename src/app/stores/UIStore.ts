import { action, computed, observable } from 'mobx';

export class UIStore {
    @observable
    public uiState: UIModel;

    constructor(fixture: UIModel) {
        this.uiState = fixture;
    }
}
