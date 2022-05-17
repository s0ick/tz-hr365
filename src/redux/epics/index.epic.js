import {combineEpics, storeEpic} from 'redux-observable';

import {appReadyFormEpic, appReplaceFormEpic, getLoadingPointCoordsEpic, geUnlLoadingPointCoordsEpic} from './app.epic';

export const appEpics = [
  appReadyFormEpic,
  appReplaceFormEpic,
  getLoadingPointCoordsEpic,
  geUnlLoadingPointCoordsEpic
];

export const rootEpic = combineEpics(...appEpics);
