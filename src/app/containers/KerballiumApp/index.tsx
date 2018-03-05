import * as React from 'react';
import * as style from './style.css';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import { RouterStore } from '../../stores';
import { STORE_ROUTER } from '../../constants/stores';
import { Header, Footer, SideToolbar, SideDrawer, DrawerContentProvider } from '../../components';
import GalaxyDisplay from '../../components/GalaxyDisplay/GalaxyDisplay';
import { Button } from 'material-ui';

@inject(STORE_ROUTER)
@observer
export class KerballiumApp extends React.Component {
    public render() {
        return (
            <div className={style.appContainer}>
                <Header />
                <div className={style.appContent}>
                    <div className={style.placeholder}>
                        <GalaxyDisplay />
                    </div>
                    <SideToolbar />
                    <SideDrawer>
                        <DrawerContentProvider />
                    </SideDrawer>
                </div>
                <Footer />
            </div>
        );
    }
}
