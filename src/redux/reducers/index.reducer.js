import {combineReducers} from 'redux';

import {tableDataReducer} from './table.reducer';
import {formDataReducer} from './form.reducer';

export const rootReducer = combineReducers(
  {
    table: tableDataReducer,
    form: formDataReducer
});
