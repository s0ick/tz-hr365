import {applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import {createEpicMiddleware} from 'redux-observable';

import {rootReducer} from './reducers/index.reducer';
import {rootEpic} from './epics/index.epic';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();

const middlewares = [
  thunkMiddleware,
  logger,
  epicMiddleware
].filter(m => !!m);

export const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(
    applyMiddleware(
      ...middlewares
    )
  )
);

epicMiddleware.run(rootEpic);
