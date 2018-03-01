import * as React from 'react';
import * as style from './style.css';
import * as classNames from 'classnames/bind';
import { STORE_UI } from '../../constants/stores';
import { UIStore } from '../../stores';
import { inject, observer } from 'mobx-react';

// Bind our classnames and styles
let cx = classNames.bind(style);

@inject(STORE_UI)
@observer
export class SideDrawer extends React.Component {
    public render() {
        const uiStore = this.props[STORE_UI] as UIStore;

        const classes = cx({
            'drawerClosed': !uiStore.uiState.drawerOpen,
            'sideDrawer': true,
        });

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}
