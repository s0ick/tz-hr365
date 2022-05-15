import {MIN_WIDTH_FIELDS, PLACES, PRODUCTS, TYPES} from '../utils/constants';

export const CONFIG_FROM = [
  {
    type: TYPES.DATE,
    id: 'date',
    placeholder: 'Delivery date',
    minWidth: MIN_WIDTH_FIELDS.SMALL
  },
  {
    type: TYPES.SELECTOR,
    placeholder: 'Product',
    id: 'product',
    data: PRODUCTS,
    minWidth: MIN_WIDTH_FIELDS.MEDIUM
  },
  {
    type: TYPES.SELECTOR,
    placeholder: 'Point of loading',
    id: 'loadingPlace',
    data: PLACES.LOADING,
    minWidth: MIN_WIDTH_FIELDS.LARGE
  },
  {
    type: TYPES.SELECTOR,
    placeholder: 'Point of unloading',
    id: 'unloadingPlace',
    data: PLACES.UNLOADING,
    minWidth: MIN_WIDTH_FIELDS.LARGE
  }
]
