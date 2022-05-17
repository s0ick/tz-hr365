import {ID_FIELDS, MIN_WIDTH_FIELDS, PLACES, PRODUCTS, TYPES} from '../utils/constants';

export const configFormMock = [
  {
    type: TYPES.DATE,
    id: ID_FIELDS.DATE,
    placeholder: 'Delivery date',
    minWidth: MIN_WIDTH_FIELDS.SMALL
  },
  {
    type: TYPES.SELECTOR,
    placeholder: 'Product',
    id: ID_FIELDS.PRODUCT,
    data: PRODUCTS,
    minWidth: MIN_WIDTH_FIELDS.MEDIUM
  },
  {
    type: TYPES.SELECTOR,
    placeholder: 'Point of loading',
    id: ID_FIELDS.LOADING_PLACE,
    data: PLACES.LOADING,
    minWidth: MIN_WIDTH_FIELDS.LARGE
  },
  {
    type: TYPES.SELECTOR,
    placeholder: 'Point of unloading',
    id: ID_FIELDS.UNLOADING_PLACE,
    data: PLACES.UNLOADING,
    minWidth: MIN_WIDTH_FIELDS.LARGE
  }
];
