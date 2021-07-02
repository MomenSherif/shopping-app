import { useCallback } from 'react';
import { useState } from 'react';
import { useReducer, useEffect } from 'react';

const reducer = (state, updater) => {
  return {
    ...state,
    ...(typeof updater === 'function' ? updater(state) : updater),
  };
};

export default function useComplexState(initialValue) {
  return useReducer(reducer, initialValue);
}

// TODO: Update one of them to be the same api -> state, partial update, force update

export function usePersistanceComplexState(initialValue, key) {
  const [state, _setState] = useState(() => {
    const localStorageValue = JSON.parse(localStorage.getItem(key));
    return localStorageValue ?? initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  const setState = useCallback(
    (updater) =>
      _setState({
        ...state,
        ...(typeof updater === 'function' ? updater(state) : updater),
      }),
    [state],
  );

  return [state, setState, _setState];
}
