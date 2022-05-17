export const getTable = state => state.table;
export const getForm = state => state.form;
export const getCurrentRow = state => state.map.currentRow;
export const getCoords = state => ({
  loadingPoint: state.map.loadingPoint,
  unloadingPoint: state.map.unloadingPoint
});
