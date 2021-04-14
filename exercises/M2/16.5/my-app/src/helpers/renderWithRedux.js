import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';
import reducers from '../reducers';

function renderWithRedux(component, initialState = {}) {
  let store = createStore(reducers, initialState);
  return ({
    ...render(<Provider store={store} >{component}</Provider>,), store,
  })
}

export default renderWithRedux;
