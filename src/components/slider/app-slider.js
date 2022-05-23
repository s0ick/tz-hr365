import React from 'react';
import PropTypes from 'prop-types';

const defaultStyles = {
  height: '768px',
  width: '4px',
  position: 'relative',
  backgroundColor: '#ccc',
  transition: 'background-color .35s'
};

export function AppSlider({isMouseDown}) {
  return (
    <div style={{...defaultStyles, backgroundColor: isMouseDown ? '#1890ff' : '#cccccc'}}>
      <div
        id={'slider-button-id'}
        style={{
          position: 'absolute',
          top: '48%',
          left: isMouseDown ? '-16px' : '-11px',
          width: isMouseDown ? '36px' : '28px',
          height: isMouseDown ? '36px' : '28px',
          borderRadius: '50%',
          backgroundColor: '#1890ff',
          cursor: 'pointer',
          zIndex: 9999,
          transition: 'width .35s, height .35s, left .35s'
        }}
      >
      </div>
    </div>
  );
}

AppSlider.propTypes = {
  isMouseDown: PropTypes.bool
};
