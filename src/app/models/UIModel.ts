import { observable } from 'mobx';

export enum ApplicationMode {
    None,
    SatellitePlannerMode,
    PlanetInformationMode,
    TripPlannerMode,
}

export class UIModel {
    @observable
    public drawerOpen: boolean;

    @observable
    public appMode: ApplicationMode;

    constructor() {
        this.drawerOpen = false;
        this.appMode = ApplicationMode.None;
    }
}
