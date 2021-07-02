import { useEffect, useState } from 'react';

export default function usePersistanceState(initialValue, key) {
  const [state, setState] = useState(() => {
    const localStorageValue = JSON.parse(localStorage.getItem(key));
    return localStorageValue ?? initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}
