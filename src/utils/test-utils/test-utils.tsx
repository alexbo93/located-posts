import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { Store } from 'redux';

type ConnectedComponentModel = {
  store: Store;
  history?: MemoryHistory<any>;
  children: any;
};
const defaultHistory = createMemoryHistory();

const ConnectedComponent: React.FC<ConnectedComponentModel> = ({
  store,
  history = defaultHistory,
  children,
}) => {
  return (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
};

export default ConnectedComponent;
