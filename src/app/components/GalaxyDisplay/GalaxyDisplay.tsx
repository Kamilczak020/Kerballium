import * as React from 'react';
import * as THREE from 'three';
import * as style from './style.css';
import { sizeable } from '../../Utility/Sizeable/Sizeable';

export interface GalaxyDisplayProps {
    displayName?: string;
    componentHeight?: number;
    componentWidth?: number;
}


@sizeable
export class GalaxyDisplay extends React.Component<GalaxyDisplayProps> {
    public render(): React.ReactNode {
        console.log(this.props.componentWidth);
        return (
            <div className={style.galaxyDisplayContainer}>
                {this.props.children}
            </div>
        );
    }
}
