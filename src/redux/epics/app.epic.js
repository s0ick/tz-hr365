import {ofType} from 'redux-observable';
import {filter, map, mergeMap} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

import {formatData} from '../../utils/map.utils';
import {ACCESS_TOKEN, BASE_URL, NOOP_ACTION} from '../../utils/constants';

import {replaceForm, setIsReady, setValue} from '../reducers/form.reducer';
import {setRow, updateCol} from '../reducers/table.reducer';
import {replaceMap, setCoords, setCurrentRow} from '../reducers/map.reducer';
import {copyObject} from "../../utils/table.utils";

export const appReadyFormEpic = (action$, state$) => action$.pipe(
  ofType(setValue.type),
  map(state => {
    if (!state.payload) {
      return NOOP_ACTION;
    }

    const {date, loadingPlace, product, unloadingPlace} = state$.value.form;

    if (!date.date || !loadingPlace || !product || !unloadingPlace) {
      return NOOP_ACTION;
    }

    return setIsReady(true);
  }),
  filter(action => action.type !== NOOP_ACTION.type)
);

export const appReplaceFormEpic = action$ => action$.pipe(
  ofType(setRow.type),
  map(() => replaceForm()),
  filter(action => action.type !== NOOP_ACTION.type)
);

export const getLoadingPointCoordsEpic = action$ => action$.pipe(
  ofType(setCurrentRow.type),
  mergeMap(state => {
    const {loadingPlace} = state.payload;

    return ajax
      .get(`${BASE_URL}${loadingPlace.value}.json?access_token=${ACCESS_TOKEN}`)
      .pipe(map(res => setCoords({point: 'loadingPoint', data: formatData(res.response.features)})));
  }),
  filter(action => action.type !== NOOP_ACTION.type)
);

export const getUnlLoadingPointCoordsEpic = action$ => action$.pipe(
  ofType(setCurrentRow.type),
  mergeMap(state => {
    const {unloadingPlace} = state.payload;

    return ajax
      .get(`${BASE_URL}${unloadingPlace.value}.json?access_token=${ACCESS_TOKEN}`)
      .pipe(map(res => setCoords({point: 'unloadingPoint', data: formatData(res.response.features)})));
  }),
  filter(action => action.type !== NOOP_ACTION.type)
);

export const setUpdatingCurrentRow = (action$, state$) => action$.pipe(
  ofType(updateCol.type),
  mergeMap(state => {
    const currentRow = state$.value.map.currentRow;

    if (currentRow && currentRow?.number.value !== state.payload.numRow) {
      return NOOP_ACTION;
    }

    const {value, list} = state.payload;
    const newRow = copyObject(currentRow);

    if (list === 'LOADING') {
      newRow.loadingPlace.value = value;
    } else {
      newRow.unloadingPlace.value = value;
    }

    return [
      replaceMap(),
      setCurrentRow(newRow)
    ];
  }),
  filter(action => action.type !== NOOP_ACTION.type)
);
