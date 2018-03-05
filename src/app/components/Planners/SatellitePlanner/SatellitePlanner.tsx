import * as React from 'react';
import * as style from './style.css';
import { Button } from 'material-ui';
import { inject, observer } from 'mobx-react';
import { SatellitePlannerStore } from '../../../stores';
import { STORE_PLANNER_SATELLITE } from '../../../constants/stores';

@inject(STORE_PLANNER_SATELLITE)
@observer
export class SatellitePlanner extends React.Component {
    public render() {
        return (
            <div className={style.satellitePlannerContainer}>
                <Button>
                    LMAO
                </Button>
            </div>
        );
    }
}
