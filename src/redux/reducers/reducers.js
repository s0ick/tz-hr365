import {ID_FIELDS, TYPES} from '../../utils/constants';

export const setRowReducer = (state, action) => {
  const rowsCount = state.content.length;
  const newRow = {
    key: `${rowsCount + 1}`,
    number: rowsCount + 1
  };

  for (let key in action.payload) {
    if (key !== 'isReady') {
      const newCol = {
        value: action.payload[key]
      };

      switch (key) {
        case ID_FIELDS.DATE:
          newCol.type = TYPES.DATE;
          newCol.value = action.payload[key].date;
          break;
        case ID_FIELDS.PRODUCT:
          newCol.type = TYPES.TEXT;
          break;
        default:
          newCol.type = TYPES.SELECTOR;

          if (ID_FIELDS.LOADING_PLACE === key) {
            newCol.list = 'LOADING';
            break;
          }
          newCol.list = 'UNLOADING';
      }
      newRow[key] = {...newCol};
    }
  }

  const newContent = [...state.content];
  newContent.push(newRow);
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
