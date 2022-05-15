import {createSlice} from '@reduxjs/toolkit';

import {setFieldReducer} from './reducers';

const formDataSlice = createSlice({
  name: 'app/form',
  initialState: {
    date: null,
    product: null,
    loadingPlace: null,
    unloadingPlace: null,
    isReady: false
  },
  reducers: {
    setValue: setFieldReducer,
  }
});

export const {
  actions: {
    setValue
  },
  reducer: formDataReducer
} = formDataSlice;
