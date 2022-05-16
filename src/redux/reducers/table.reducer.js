import {createSlice} from '@reduxjs/toolkit';

import {columnsTableMock, contentTableMock} from '../../mocks/table';

import {deleteRowReducer, setRowReducer, updateColReducer} from './reducers';


const tableDataSlice = createSlice({
  name: 'app/table',
  initialState: {
    columns: columnsTableMock,
    content: contentTableMock
  },
  reducers: {
    setRow: setRowReducer,
    updateCol: updateColReducer,
    deleteRow: deleteRowReducer
  }
});

export const {
  actions: {
    setRow,
    updateCol,
    deleteRow
  },
  reducer: tableDataReducer
} = tableDataSlice;
