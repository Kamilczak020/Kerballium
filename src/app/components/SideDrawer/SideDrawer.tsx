import * as React from 'react';
import * as style from './style.css';
import * as classNames from 'classnames/bind';

// Bind our classnames and styles
let cx = classNames.bind(style);

export interface SideDrawerProps {
    open: boolean;
}

export class SideDrawer extends React.Component<SideDrawerProps> {
    public render() {
        const classes = cx({'sideDrawer': true, 'drawerExtended': this.props.open });

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}
