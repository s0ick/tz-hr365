export const setTableReducer = (state, action) => {
  state.table = action.payload;
};

export const setRowReducer = (state, action) => {
  state.table = {...state.table}.content.push(action.payload);
};

export const deleteRowReducer = (state, action) => {
  state.table = {...state.table}.content.slice(action.payload, action.payload);
};

export const setFieldReducer = (state, action) => {
  state[action.payload.field] = action.payload.value;
};
