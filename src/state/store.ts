import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const reducer = combineReducers(reducers);

const initialState = {
  generatedNumbers: {}
};

const middlewares = [thunk];

// Use redux-logger only on development mode
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
  const { logger } = require('redux-logger');

  middlewares.push(logger);
}

// Configure a store that uses the defined middlewares
function configureStore() {
  const enhancer = compose(applyMiddleware(...middlewares));

  return createStore(reducer, initialState, enhancer);
}

const store = configureStore();

export { store };
