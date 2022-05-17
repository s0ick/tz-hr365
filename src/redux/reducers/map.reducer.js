import {createSlice} from '@reduxjs/toolkit';

import {setCoordsReducer, setCurrentRowReducer} from './reducers';

const mapDataSlice = createSlice({
  name: 'app/map',
  initialState: {
    currentRow: null,
    loadingPoint: null,
    unloadingPoint: null
  },
  reducers: {
    setCurrentRow: setCurrentRowReducer,
    setCoords: setCoordsReducer,
    replaceMap: state => {
      state.currentRow = null;
      state.loadingPoint = null;
      state.unloadingPoint = null;
    }
  }
});

export const {
  actions: {
    setCurrentRow,
    setCoords,
    replaceMap
  },
  reducer: mapDataReducer
} = mapDataSlice;
