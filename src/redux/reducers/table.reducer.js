import {createSlice} from '@reduxjs/toolkit';

import {deleteRowReducer, setRowReducer, setTableReducer} from './reducers';

const tableDataSlice = createSlice({
  name: 'app/table',
  initialState: {
    table: null
  },
  reducers: {
    setTable: setTableReducer,
    setRow: setRowReducer,
    deleteRow: deleteRowReducer
  }
});

export const {
  actions: {
    setTable,
    setRow,
    deleteRow
  },
  reducer: tableDataReducer
} = tableDataSlice;
