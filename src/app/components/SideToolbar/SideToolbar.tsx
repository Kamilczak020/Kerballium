import * as React from 'react';
import * as style from './style.css';
import * as classNames from 'classnames';
import { getTheme } from '../../themes/theme';
import { Drawer, Divider, IconButton, Toolbar } from 'material-ui';
import { SatelliteIcon, RocketIcon } from '../../constants/icons';

export class SideToolbar extends React.Component {
    public render() {
        return (
            <Toolbar className={style.toolbar}>
                <SatelliteIcon className={style.toolbarIcon} width={50} height={50}/>
                <Divider className={style.divider}/>
                <RocketIcon className={style.toolbarIcon} width={50} height={50}/>
                <Divider className={style.divider}/>
                <SatelliteIcon className={style.toolbarIcon} width={50} height={50}/>
                <Divider className={style.divider}/>
                <SatelliteIcon className={style.toolbarIcon} width={50} height={50}/>
            </Toolbar>
        );
    }
}
