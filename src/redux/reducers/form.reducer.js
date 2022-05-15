import {createSlice} from '@reduxjs/toolkit';

import {setFieldReducer, setIsReadyForm} from './reducers';

export const initialStateFrom = {
  date: {
    date: null,
    moment: null
  },
  product: null,
  loadingPlace: null,
  unloadingPlace: null,
  isReady: false
};

const formDataSlice = createSlice({
  name: 'app/form',
  initialState: initialStateFrom,
  reducers: {
    setValue: setFieldReducer,
    setIsReady: setIsReadyForm,
    replaceForm: state => {
      state.date = {
        date: null,
        moment: null
      };
      state.product = null;
      state.loadingPlace = null;
      state.unloadingPlace = null;
      state.isReady = false;
    }
  }
});

export const {
  actions: {
    setValue,
    setIsReady,
    replaceForm
  },
  reducer: formDataReducer
} = formDataSlice;
