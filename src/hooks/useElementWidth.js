import {useEffect, useState} from 'react';
import debounce from 'lodash/debounce';

export function useElementWidth(element, delay = 700) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(element && (element.getBoundingClientRect().width || 0));
  }, [element]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(element && (element.getBoundingClientRect().width || 0));
    };
    const debouncedHandleResize = debounce(handleResize, delay);
    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [delay, element]);

  return width;
}
