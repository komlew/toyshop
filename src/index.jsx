// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';

import createStore from './reducers/store';
import { Overview } from './containers';
import { MainContainer } from './styles';

const store = createStore();
const rootAppNode = document.getElementById('root');

if (rootAppNode) {
  ReactDOM.render(
    <Provider store={store}>
      <MainContainer>
        <HashRouter>
          <Switch>
            <Route exact path="/product/:productID/" component={Overview} />
            <Route exact path="/" component={Overview} />
          </Switch>
        </HashRouter>
      </MainContainer>
    </Provider>,
    rootAppNode,
  );
}
