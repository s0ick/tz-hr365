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
  {
    key: '3',
    number: {
      type: TYPES.TEXT,
      value: 3
    },
    date: {
      type: TYPES.DATE,
      value: '2022-05-14'
    },
    product: {
      type: TYPES.TEXT,
      value: PRODUCTS[3]
    },
    loadingPlace: {
      type: TYPES.SELECTOR,
      value: PLACES.LOADING[2],
      list: 'LOADING',
      numRow: 3
    },
    unloadingPlace: {
      type: TYPES.SELECTOR,
      value: PLACES.UNLOADING[0],
      list: 'UNLOADING',
      numRow: 3
    }
  },
  {
    key: '4',
    number: {
      type: TYPES.TEXT,
      value: 4
    },
    date: {
      type: TYPES.DATE,
      value: '2022-05-15'
    },
    product: {
      type: TYPES.TEXT,
      value: PRODUCTS[4]
    },
    loadingPlace: {
      type: TYPES.SELECTOR,
      value: PLACES.LOADING[2],
      list: 'LOADING',
      numRow: 4
    },
    unloadingPlace: {
      type: TYPES.SELECTOR,
      value: PLACES.UNLOADING[2],
      list: 'UNLOADING',
      numRow: 4
    }
  },
  {
    key: '5',
    number: {
      type: TYPES.TEXT,
      value: 5
    },
    date: {
      type: TYPES.DATE,
      value: '2022-05-16'
    },
    product: {
      type: TYPES.TEXT,
      value: PRODUCTS[0]
    },
    loadingPlace: {
      type: TYPES.SELECTOR,
      value: PLACES.LOADING[1],
      list: 'LOADING',
      numRow: 5
    },
    unloadingPlace: {
      type: TYPES.SELECTOR,
      value: PLACES.UNLOADING[1],
      list: 'UNLOADING',
      numRow: 5
    }
  }
];
