import {combineReducers} from 'redux';

import {tableDataReducer} from './table.reducer';
import {formDataReducer} from './form.reducer';
import {mapDataReducer} from './map.reducer';

export const rootReducer = combineReducers(
  {
    table: tableDataReducer,
    form: formDataReducer,
    map: mapDataReducer
});
