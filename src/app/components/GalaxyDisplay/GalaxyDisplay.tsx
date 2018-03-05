import * as React from 'react';
import * as THREE from 'three';
import * as style from './style.css';
import sizeMe from 'react-sizeme';

export interface GalaxyDisplayProps {
    size: any;
}

class GalaxyDisplay extends React.Component<GalaxyDisplayProps> {
    private dievRef;

    public render() {
        console.log(this.props.size);

        return (
            <div className={style.galaxyDisplayContainer}>
                {this.props.children}
            </div>
        );
    }
}

const config = { monitorHeight: true, monitorWidth: true };
const sizeMeHOC = sizeMe(config);

export default sizeMeHOC(GalaxyDisplay);
