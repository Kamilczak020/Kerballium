import * as React from 'react';
import * as style from './style.css';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import { RouterStore } from '../../stores';
import { STORE_ROUTER } from '../../constants/stores';
import { Header, SideDrawer } from '../../components';

@inject(STORE_ROUTER)
@observer
export class KerballiumApp extends React.Component {
    public render() {
        return (
            <div className={style.appContainer}>
                <Header />
                <div className={style.appContent}>
                    <SideDrawer />
                </div>
            </div>
        );
    }
}
