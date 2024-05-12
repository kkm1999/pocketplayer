import { useCallback, useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedItem, setStoredItem] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue || null;
  });

  const setLocalStorage = useCallback(
    (value) => {
      const newItem = typeof value === 'function' ? value(storedItem) : value;

      setStoredItem(newItem);
      localStorage.setItem(key, JSON.stringify(newItem));
    },
    [key, storedItem]
  );

  return [storedItem, setLocalStorage];
};


