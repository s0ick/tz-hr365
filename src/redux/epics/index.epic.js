import {combineEpics, storeEpic} from 'redux-observable';


export const appEpics = [

];

export const rootEpic = combineEpics(...appEpics);
