import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';

const defaultStyles = {
  height: '768px',
  width: '4px',
  position: 'relative',
  backgroundColor: '#ccc',
  transition: 'background-color .35s'
};

export function AppSlider({setWidth}) {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const onMouseDownBtn = useCallback(
    () => {
      setIsMouseDown(true);
    }, []
  );

  const onMouseUpOutBtn = useCallback(
    () => {
      setIsMouseDown(false);
    }, []
  );

  const onMouseMoveBtn = useCallback(
    event => {
      if (isMouseDown) {
        setWidth(event.clientX - 28); // 28: Bth width
      }
    }, [isMouseDown]
  );

  return (
    <div style={{...defaultStyles, backgroundColor: isMouseDown ? '#1890ff' : '#cccccc'}}>
      <div
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
        onMouseMove={onMouseMoveBtn}
        onMouseDown={onMouseDownBtn}
        onMouseOut={onMouseUpOutBtn}
        onMouseUp={onMouseUpOutBtn}
      >
      </div>
    </div>
  );
}

AppSlider.propTypes = {
  setWidth: PropTypes.func
};
