import {ID_FIELDS, TYPES} from './constants';

export const combineRow = data => {
  const newRow = [];

  for (let key in ID_FIELDS) {
    let type;
    let value = data[ID_FIELDS[key]];

    switch (ID_FIELDS[key]) {
      case ID_FIELDS.DATE:
        type = TYPES.DATE;
        value = data[ID_FIELDS[key]].date;
        break;
      case ID_FIELDS.PRODUCT:
        type = TYPES.TEXT
        break;
      default:
        type = TYPES.SELECTOR;
        break;
    }

    newRow.push({type, value});
  }
  return newRow;
};
