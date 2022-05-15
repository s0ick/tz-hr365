export const setTableReducer = (state, action) => {
  state.content = action.payload;
};

export const setRowReducer = (state, action) => {
  const newContent = [...state.content];
  newContent.push(action.payload);
  state.content = newContent;
};

export const deleteRowReducer = (state, action) => {
  state.content = [...state.content].slice(action.payload, action.payload);
};

export const setFieldReducer = (state, action) => {
  state[action.payload.field] = action.payload.value;
};

export const setIsReadyForm = (state, action) => {
  state.isReady = action.payload;
};
