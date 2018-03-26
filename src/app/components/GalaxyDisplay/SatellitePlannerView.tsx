import * as React from 'react';
import { SceneViewBase, SceneViewBaseProps, SceneViewBaseState } from './SceneViewBase';
import { sizeable } from '../../Utility/Sizeable/Sizeable';

export interface SatellitePlannerViewProps extends SceneViewBaseProps {
    poop?: number;
}

export interface SatellitePlannerViewState extends SceneViewBaseState {
    poop?: number;
}

@sizeable(50)
export class SatellitePlannerView extends SceneViewBase<SatellitePlannerViewProps, SatellitePlannerViewState> {
    public constructor(props: SatellitePlannerViewProps, state?: SatellitePlannerViewState) {
        super(props, state);
    }

    public componentDidUpdate?(prevProps: Readonly<SatellitePlannerViewProps>, prevState: Readonly<SatellitePlannerViewState>, context: any) {

    }
}
