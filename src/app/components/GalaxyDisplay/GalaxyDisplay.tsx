import * as React from 'react';
import * as style from './style.css';
import { sizeable } from '../../Utility/Sizeable/Sizeable';
import { Scene } from './Scene';

export interface GalaxyDisplayProps {
    displayName?: string;
    componentHeight?: number;
    componentWidth?: number;
}

export interface GalaxyDisplayState {

}

export class GalaxyDisplay extends React.Component<GalaxyDisplayProps, GalaxyDisplayState> {
    public render(): React.ReactNode {
        return (
            <Scene />
        );
    }
}
