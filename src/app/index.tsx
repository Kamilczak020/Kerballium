import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import { Root } from './containers/Root';
import { RouterStore, UIStore } from './stores';
import { SatellitePlannerStore, PlanetInformationStore, TripPlannerStore } from './stores';
import { UIModel } from './models';
import { SatellitePlannerModel, PlanetInformationModel, TripPlannerModel } from './models';
import { STORE_ROUTER, STORE_UI } from './constants/stores';
import { STORE_INFORMATION_PLANET, STORE_PLANNER_SATELLITE, STORE_PLANNER_TRIP } from './constants/stores';
import { KerballiumApp } from './containers/KerballiumApp';

// Enable mobx strict mode
useStrict(true);

const history = createBrowserHistory();

const routerStore = new RouterStore(history);
const satellitePlannerStore = new SatellitePlannerStore(new SatellitePlannerModel());
const planetInfoStore = new PlanetInformationStore(new PlanetInformationModel());
const tripPlannerStore = new TripPlannerStore(new TripPlannerModel());

const uiStore = new UIStore(new UIModel(), [satellitePlannerStore, planetInfoStore, tripPlannerStore]);

const rootStores = {
    [STORE_PLANNER_SATELLITE]: satellitePlannerStore,
    [STORE_INFORMATION_PLANET]: planetInfoStore,
    [STORE_PLANNER_TRIP]: tripPlannerStore,
    [STORE_ROUTER]: routerStore,
    [STORE_UI]: uiStore,
};

// render react DOM
ReactDOM.render(
  <Provider {...rootStores} >
    <Root>
      <Router history={history} >
        <Switch>
          <Route path='/' component={KerballiumApp} />
        </Switch>
      </Router>
    </Root>
  </Provider >,
  document.getElementById('root'),
);
