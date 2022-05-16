import {createSlice} from '@reduxjs/toolkit';

import {columnsTableMock, contentTableMock} from '../../mocks/table';

import {deleteRowReducer, setRowReducer} from './reducers';


const tableDataSlice = createSlice({
  name: 'app/table',
  initialState: {
    columns: columnsTableMock,
    content: contentTableMock
  },
  reducers: {
    setRow: setRowReducer,
    deleteRow: deleteRowReducer
  }
});

export const {
  actions: {
    setRow,
    deleteRow
  },
  reducer: tableDataReducer
} = tableDataSlice;
