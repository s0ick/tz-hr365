import {renderCol} from '../utils/table.utils';
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
    key: ID_FIELDS.DATE,
    render: col => renderCol(col)
  },
  {
    title: 'Product',
    dataIndex: ID_FIELDS.PRODUCT,
    key: ID_FIELDS.PRODUCT,
    render: col => renderCol(col)
  },
  {
    title: 'Point of loading',
    dataIndex: ID_FIELDS.LOADING_PLACE,
    key: ID_FIELDS.LOADING_PLACE,
    render: col => renderCol(col)
  },
  {
    title: 'Point of unloading',
    dataIndex: ID_FIELDS.UNLOADING_PLACE,
    key: ID_FIELDS.UNLOADING_PLACE,
    render: col => renderCol(col)
  }
];

export const contentTableMock = [
  {
    key: '1',
    number: 1,
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
      list: 'LOADING'
    },
    unloadingPlace: {
      type: TYPES.SELECTOR,
      value: PLACES.UNLOADING[2],
      list: 'UNLOADING'
    }
  },
  {
    key: '2',
    number: 2,
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
      list: 'LOADING'
    },
    unloadingPlace: {
      type: TYPES.SELECTOR,
      value: PLACES.UNLOADING[1],
      list: 'UNLOADING'
    }
  },
];
