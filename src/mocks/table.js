import {PLACES, PRODUCTS, TYPES} from '../utils/constants';

export const TABLE_MOCK = {
  titleRow: [
    'Date of creation',
    'Product',
    'Loading place',
    'Place of unloading'
  ],
  content: [
    [
      {
        type: TYPES.DATE,
        value: new Date('2022/05/12')
      },
      {
        type: TYPES.TEXT,
        value: PRODUCTS[3]
      },
      {
        type: TYPES.SELECTOR,
        value: PLACES.LOADING[1]
      },
      {
        type: TYPES.SELECTOR,
        value: PLACES.UNLOADING[2]
      }
    ],
    [
      {
        type: TYPES.DATE,
        value: new Date('2022/05/10')
      },
      {
        type: TYPES.TEXT,
        value: PRODUCTS[2]
      },
      {
        type: TYPES.SELECTOR,
        value: PLACES.LOADING[0]
      },
      {
        type: TYPES.SELECTOR,
        value: PLACES.UNLOADING[1]
      }
    ]
  ]
};
