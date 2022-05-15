import {ofType} from 'redux-observable';
import {filter, map} from 'rxjs/operators';

import {NOOP_ACTION} from '../../utils/constants';

import {replaceForm, setIsReady, setValue} from '../reducers/form.reducer';
import {setRow} from '../reducers/table.reducer';

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
