import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import { Root } from './containers/Root';
import { RouterStore, UIStore } from './stores';
import { UIModel } from './models';
import { STORE_ROUTER, STORE_UI } from './constants/stores';
import { KerballiumApp } from './containers/KerballiumApp';

// Enable mobx strict mode
useStrict(true);

const history = createBrowserHistory();

const routerStore = new RouterStore(history);
const uiStore = new UIStore(new UIModel());

const rootStores = {
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
