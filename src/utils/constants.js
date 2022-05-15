export const NOOP_ACTION = {type: null};

export const ID_FIELDS = {
  DATE: 'date',
  PRODUCT: 'product',
  LOADING_PLACE: 'loadingPlace',
  UNLOADING_PLACE: 'unloadingPlace'
};

export const TYPES = {
  DATE: 'DATE',
  SELECTOR: 'SELECTOR',
  TEXT: 'TEXT'
};

export const PRODUCTS = [
  'Samsung UE43AU8000U',
  'LG 24TN520S-PZ LED',
  'Sony KDL-40RE353 LED',
  'LG 43UM7020 LED',
  'Samsung UE32N5000AU LED',
  'Xiaomi Mi TV 4S 55 T2 LED',
  'Philips 48OLED806'
];

export const PLACES = {
  LOADING: [
    'Ostafevskaya st., 10, Moscow, Moscow region, 142172',
    'Mayakovsky st., 27, Elektrougli, Moscow region, 142461',
    'Yubileinaya st., 11, building 3, Zheleznodorozhny, Moscow region, 143986'
  ],
  UNLOADING: [
    'Lermontovsky pr., 19, bldg. 2, Moscow, 109153',
    'Lyublinskaya st., 169 k2, Moscow, 109652',
    'Novoslobodskaya st., 19A, Sobolikha, Moscow region, 143985'
  ]
};

export const MIN_WIDTH_FIELDS = {
  SMALL: 138,
  MEDIUM: 240,
  LARGE: 525
};
