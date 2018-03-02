import { action, computed, observable } from 'mobx';
import { UIModel } from '../models/UIModel';
import { IPlannerStore } from './IPlannerStore';
import { STORE_PLANNER_SATELLITE, STORE_INFORMATION_PLANET, STORE_PLANNER_TRIP } from '../constants/stores';
import { inject, observer } from 'mobx-react';

export class UIStore {
    @observable
    public uiState: UIModel;

    @observable
    public planners: IPlannerStore[];

    @action
    public togglePlanner(plannerStore: IPlannerStore) {
        const prevState = plannerStore.state.isActive;
        console.log(prevState);
        this.planners.forEach(planner => {
            planner.state.isActive = false;
        });

        plannerStore.state.isActive = !prevState;
        this.toggleDrawer();
    }

    public getActivePlannerStore(): IPlannerStore {
        for (let planner of this.planners) {
            if (planner.state.isActive === true) {
                return planner;
            }

            return undefined;
        }
    }

    private toggleDrawer(): void {
        for (let planner of this.planners) {
            if (planner.state.isActive === true) {
                this.uiState.drawerOpen = true;
                return;
            }
            this.uiState.drawerOpen = false;
        }
    }

    constructor(fixture: UIModel, plannerStores: IPlannerStore[]) {
        this.uiState = fixture;
        this.planners = plannerStores;
    }
}
