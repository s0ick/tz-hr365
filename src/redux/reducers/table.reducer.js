import {createSlice} from '@reduxjs/toolkit';

import {deleteRowReducer, setRowReducer, setTableReducer} from './reducers';

const tableDataSlice = createSlice({
  name: 'app/table',
  initialState: {
    titleRow: [
      'Date of creation',
      'Product',
      'Point of loading',
      'Point of unloading'
    ],
    content: null
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
