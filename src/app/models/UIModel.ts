import { observable } from 'mobx';

export class UIModel {
    @observable
    public drawerOpen: boolean;

    constructor() {
        this.drawerOpen = false;
    }
}
