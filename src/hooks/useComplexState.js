import { useReducer } from 'react';

const reducer = (state, updater) => ({
  ...state,
  ...(typeof updater === 'function' ? updater(state) : updater),
});

export default function useComplexState(initialValue) {
  return useReducer(reducer, initialValue);
}
