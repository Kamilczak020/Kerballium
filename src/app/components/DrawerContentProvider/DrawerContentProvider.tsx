import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { UIStore } from '../../stores';
import { STORE_UI } from '../../constants/stores';
import { ApplicationMode } from '../../models';
import { SatellitePlanner } from '../Planners';

@inject(STORE_UI)
@observer
export class DrawerContentProvider extends React.Component {
    private getDrawerContent(): JSX.Element {
        const uiStore = this.props[STORE_UI] as UIStore;

        switch (uiStore.uiState.appMode) {
            case ApplicationMode.PlanetInformationMode: {
                return (
                    <div />
                );
            }
            case ApplicationMode.SatellitePlannerMode: {
                return (
                    <SatellitePlanner />
                );
            }
            case ApplicationMode.TripPlannerMode: {
                return (
                    <div />
                );
            }
        }
    }

    public render(): JSX.Element {
        return (
            <div>
                {this.getDrawerContent()}
            </div>
        );
    }
}
