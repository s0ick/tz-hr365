import React from 'react';
import {Select} from 'antd';

import {PLACES, TYPES} from './constants';

export const formatDate = date => date.split('-').reverse().join('.');
export const randomKey = () => (Math.random() + 1).toString(36).substring(7);

export const renderCol = col => {
  switch (col.type) {
    case TYPES.DATE: return formatDate(col.value);
    case TYPES.SELECTOR: return (
      <Select value={col.value}>
        {PLACES[col.list].map(option => (
          <Select.Option
            key={randomKey()}
            value={option}
          >
            {option}
          </Select.Option>
        ))}
      </Select>
    );
    default: return col.value;
  }
};
