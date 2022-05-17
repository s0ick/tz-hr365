import {ID_FIELDS, TYPES} from '../../utils/constants';

export const setRowReducer = (state, action) => {
  const rowsCount = state.content.length;
  const newRow = {
    key: `${rowsCount + 1}`,
    number: {
      type: TYPES.TEXT,
      value: rowsCount + 1
    }
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
          newCol.numRow = rowsCount + 1;

          if (ID_FIELDS.LOADING_PLACE === key) {
            newCol.list = 'LOADING';
            break;
          }

          newCol.list = 'UNLOADING';
          break;
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

export const updateColReducer = (state, action) => {
  const {numRow, value, list} = action.payload;
  const newContent = [...state.content];

  if (list === 'LOADING') {
    newContent[numRow - 1].loadingPlace.value = value;
  } else {
    newContent[numRow - 1].unloadingPlace.value = value;
  }

  state.content = newContent;
};

export const setFieldReducer = (state, action) => {
  state[action.payload.field] = action.payload.value;
};

export const setIsReadyForm = (state, action) => {
  state.isReady = action.payload;
};

export const setCurrentRowReducer = (state, action) => {
  state.currentRow = action.payload;
};

export const setCoordsReducer = (state, action) => {
  state[action.payload.point] = action.payload.data;
};
