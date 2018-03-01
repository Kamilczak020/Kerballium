import * as React from 'react';
import * as style from './style.css';
import * as classNames from 'classnames';
import { getTheme } from '../../themes/theme';
import { Drawer, Divider, IconButton, Toolbar } from 'material-ui';
import { ToolboxElement } from '../ToolboxElement/ToolboxElement';
import { SatelliteIcon, RocketIcon, PlanetIcon } from '../../components/icons';

export class SideToolbar extends React.Component {
    public render() {
        return (
            <Toolbar className={style.toolbar}>
                <ToolboxElement className={style.toolboxElement} text='Satellite Planner'>
                    <SatelliteIcon className={style.toolbarIcon} />
                </ToolboxElement>
                <Divider className={style.divider}/>
                <ToolboxElement className={style.toolboxElement} text='Trip Planner'>
                    <RocketIcon className={style.toolbarIcon} />
                </ToolboxElement>
                <Divider className={style.divider}/>
                <ToolboxElement className={style.toolboxElement} text='Planet Information'>
                    <PlanetIcon className={style.toolbarIcon} />
                </ToolboxElement>
                <Divider className={style.divider}/>
                <ToolboxElement className={style.toolboxElement} text='Satellite Planner'>
                    <SatelliteIcon className={style.toolbarIcon} />
                </ToolboxElement>
            </Toolbar>
        );
    }
}
