import { useReducer, useEffect } from 'react';

const reducer = (state, updater) => ({
  ...state,
  ...(typeof updater === 'function' ? updater(state) : updater),
});

export default function useComplexState(initialValue) {
  return useReducer(reducer, initialValue);
}

export function usePersistanceComplexState(initialValue, key) {
  const [state, setState] = useReducer(reducer, initialValue, (v) => {
    const localStorageValue = JSON.parse(localStorage.getItem(key));
    return localStorageValue ?? initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}
