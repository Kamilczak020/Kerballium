import * as React from 'react';
import * as style from './style.css';
import * as classNames from 'classnames';
import { Drawer, Divider, IconButton, Toolbar } from 'material-ui';
import { ToolboxElement } from '../ToolboxElement/ToolboxElement';
import { SatelliteIcon, RocketIcon, PlanetIcon } from '../../components/icons';
import { inject, observer } from 'mobx-react';
import { ApplicationMode } from '../../models';
import { STORE_INFORMATION_PLANET, STORE_PLANNER_SATELLITE, STORE_PLANNER_TRIP } from '../../constants/stores';
import { PlanetInformationStore, SatellitePlannerStore, TripPlannerStore } from '../../stores';

@inject(STORE_INFORMATION_PLANET, STORE_PLANNER_SATELLITE, STORE_PLANNER_TRIP)
@observer
export class SideToolbar extends React.Component {
    public render() {
        const satellitePlannerStore = this.props[STORE_PLANNER_SATELLITE] as SatellitePlannerStore;
        const tripPlannerStore = this.props[STORE_PLANNER_TRIP] as TripPlannerStore;
        const planetInfoStore = this.props[STORE_INFORMATION_PLANET] as PlanetInformationStore;

        return (
            <Toolbar className={style.toolbar}>
                <ToolboxElement
                    className={style.toolboxElement}
                    text='Satellite Planner'
                    mode={ApplicationMode.SatellitePlannerMode}>
                        <SatelliteIcon className={style.toolbarIcon} />
                </ToolboxElement>
                <Divider className={style.divider}/>
                <ToolboxElement
                    className={style.toolboxElement}
                    text='Trip Planner'
                    mode={ApplicationMode.TripPlannerMode}>
                        <RocketIcon className={style.toolbarIcon} />
                </ToolboxElement>
                <Divider className={style.divider}/>
                <ToolboxElement
                    className={style.toolboxElement}
                    text='Planet Information'
                    mode={ApplicationMode.PlanetInformationMode}>
                        <PlanetIcon className={style.toolbarIcon} />
                </ToolboxElement>
                <Divider className={style.divider}/>
            </Toolbar>
        );
    }
}
