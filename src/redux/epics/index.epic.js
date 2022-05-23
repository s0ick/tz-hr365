import {combineEpics, storeEpic} from 'redux-observable';

import {
  appReadyFormEpic,
  appReplaceFormEpic,
  getLoadingPointCoordsEpic,
  getUnlLoadingPointCoordsEpic,
  setUpdatingCurrentRow
} from './app.epic';

export const appEpics = [
  appReadyFormEpic,
  appReplaceFormEpic,
  getLoadingPointCoordsEpic,
  getUnlLoadingPointCoordsEpic,
  setUpdatingCurrentRow
];

export const rootEpic = combineEpics(...appEpics);
