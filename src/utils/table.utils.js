import React from 'react';

import {AppSelectorCol} from '../components/table/cols/app-selector-col';

import {TYPES} from './constants';

export const formatDate = date => date.split('-').reverse().join('.');
export const randomKey = () => (Math.random() + 1).toString(36).substring(7);
export const copyObject = obj => JSON.parse(JSON.stringify(obj));

export const renderCol = (col, onUpdate = () => {}) => {
  switch (col.type) {
    case TYPES.DATE: return formatDate(col.value);
    case TYPES.SELECTOR: return <AppSelectorCol col={col} onUpdate={onUpdate}/>;
    default: return col.value;
  }
};
