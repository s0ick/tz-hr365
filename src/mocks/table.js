import {ID_FIELDS, PLACES, PRODUCTS, TYPES} from '../utils/constants';

export const columnsTableMock = [
  {
    title: '№',
    dataIndex: 'number',
    key: 'number'
  },
  {
    title: 'Delivery date',
    dataIndex: ID_FIELDS.DATE,
    key: ID_FIELDS.DATE
  },
  {
    title: 'Product',
    dataIndex: ID_FIELDS.PRODUCT,
    key: ID_FIELDS.PRODUCT
  },
  {
    title: 'Point of loading',
    dataIndex: ID_FIELDS.LOADING_PLACE,
    key: ID_FIELDS.LOADING_PLACE
  },
  {
    title: 'Point of unloading',
    dataIndex: ID_FIELDS.UNLOADING_PLACE,
    key: ID_FIELDS.UNLOADING_PLACE
  }
];

export const contentTableMock = [
  {
    key: '1',
    number: {
      type: TYPES.TEXT,
      value: 1
    },
    date: {
      type: TYPES.DATE,
      value: '2022-05-12'
    },
    product: {
      type: TYPES.TEXT,
      value: PRODUCTS[3]
    },
    loadingPlace: {
      type: TYPES.SELECTOR,
      value: PLACES.LOADING[1],
      list: 'LOADING',
      numRow: 1
    },
    unloadingPlace: {
      type: TYPES.SELECTOR,
      value: PLACES.UNLOADING[2],
      list: 'UNLOADING',
      numRow: 1
    }
  },
  {
    key: '2',
    number: {
      type: TYPES.TEXT,
      value: 2
    },
    date: {
      type: TYPES.DATE,
      value: '2022-05-10'
    },
    product: {
      type: TYPES.TEXT,
      value: PRODUCTS[2]
    },
    loadingPlace: {
      type: TYPES.SELECTOR,
      value: PLACES.LOADING[0],
      list: 'LOADING',
      numRow: 2
    },
    unloadingPlace: {
      type: TYPES.SELECTOR,
      value: PLACES.UNLOADING[1],
      list: 'UNLOADING',
      numRow: 2
    }
  },
];
