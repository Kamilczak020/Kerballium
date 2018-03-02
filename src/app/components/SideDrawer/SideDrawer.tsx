import * as React from 'react';
import * as style from './style.css';
import * as classNames from 'classnames/bind';
import { inject, observer } from 'mobx-react';
import { SatellitePlanner } from '../Planners';
import { UIStore, PlanetInformationStore, SatellitePlannerStore, TripPlannerStore } from '../../stores';
import { STORE_UI, STORE_PLANNER_SATELLITE, STORE_INFORMATION_PLANET, STORE_PLANNER_TRIP } from '../../constants/stores';
// Bind our classnames and styles
let cx = classNames.bind(style);


@inject(STORE_UI)
@observer
export class SideDrawer extends React.Component {
    private provideDrawerContent(): JSX.Element {
        const uiStore = this.props[STORE_UI] as UIStore;

        const providedStore = uiStore.getActivePlannerStore();
        if (!!providedStore) {
            switch (providedStore.type) {
                case STORE_PLANNER_SATELLITE: {
                    return (
                        <SatellitePlanner />
                    );
                }
                case STORE_PLANNER_TRIP: {
                    return (
                        <div />
                    );
                }
                case STORE_INFORMATION_PLANET: {
                    return (
                        <div />
                    );
                }
            }
        }
    }

    public render() {
        const uiStore = this.props[STORE_UI] as UIStore;

        const classes = cx({
            'drawerClosed': !uiStore.uiState.drawerOpen,
            'sideDrawer': true,
        });

        return (
            <div className={classes}>
                {this.provideDrawerContent()}
            </div>
        );
    }
}
