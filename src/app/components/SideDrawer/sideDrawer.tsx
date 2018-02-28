import * as React from 'react';
import * as style from './style.css';
import { getTheme } from '../../themes/theme';
import { Drawer, IconButton } from 'material-ui';
import { SatelliteIcon } from '../../constants/icons/SatelliteIcon';

interface SideDrawerState {
    open: boolean;
}

export class SideDrawer extends React.Component<any, SideDrawerState> {
    constructor(props?: any, context?: SideDrawerState) {
        super(props, context);

        this.state = {
            open: false,
        };
    }
    public render() {
        return (
            <Drawer variant='permanent' open={this.state.open}>
                <div className={style.toolbar}>
                    <IconButton>
                        <SatelliteIcon className={style.toolbarIcon} width={50} height={50} />
                    </IconButton>
                </div>
            </Drawer>
        );
    }
}
