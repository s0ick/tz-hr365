import {combineEpics, storeEpic} from 'redux-observable';

import {appReadyFormEpic, appReplaceFormEpic} from './app.epic';

export const appEpics = [
  appReadyFormEpic,
  appReplaceFormEpic
];

export const rootEpic = combineEpics(...appEpics);
