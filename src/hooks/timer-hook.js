import { useCallback, useEffect, useRef } from 'react';

export const useTimeout = () => {
  const timeoutRef = useRef();

  const clear = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const set = useCallback(
    (callback, delay) => {
      clear();
      timeoutRef.current = setTimeout(callback, delay);
    },
    [clear]
  );

  useEffect(() => {
    return clear;
  }, [clear]);

  return [set, clear];
};


