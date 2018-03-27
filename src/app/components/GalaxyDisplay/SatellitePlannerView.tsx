import * as React from 'react';
import { SceneViewBase, SceneViewBaseProps, SceneViewBaseState } from './SceneViewBase';
import { SatellitePlannerSceneController } from './SatellitePlannerSceneController';
import { sizeable } from '../../Utility/Sizeable/Sizeable';

export interface SatellitePlannerViewProps extends SceneViewBaseProps {
    poop?: number;
}

export interface SatellitePlannerViewState extends SceneViewBaseState {
    poop?: number;
}

@sizeable(0)
export class SatellitePlannerView extends SceneViewBase<SatellitePlannerViewProps, SatellitePlannerViewState> {
    public constructor(props: SatellitePlannerViewProps, state?: SatellitePlannerViewState) {
        super(props, state);

        this.state = {
            isPrimaryDrag: false,
            isSecondaryDrag: false,
            mousePosX: 0,
            mousePosY: 0,
        };
    }

    public componentDidMount?() {
        this.sceneController = new SatellitePlannerSceneController(this.canvas);
        this.sceneController.startScene();
    }
}
