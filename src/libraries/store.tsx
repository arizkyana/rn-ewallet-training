import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

function withRedux(WrappedComponent: React.FC) {
  const Content = () => {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <WrappedComponent />
      </Provider>
    );
  };
  return Content;
}

export default withRedux;
