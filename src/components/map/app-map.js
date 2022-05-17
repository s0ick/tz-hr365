import React from 'react';
import PropTypes from 'prop-types';

const defaultStyles = {
  minWidth: '400px',
  height: '768px',
  backgroundColor: '#9f9e9e',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export function AppMap({width}) {
  return (
    <div style={{...defaultStyles, width}}>
      {'MAP'}
    </div>
  );
}

AppMap.propTypes = {
  width: PropTypes.number
}
