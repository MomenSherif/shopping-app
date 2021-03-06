import React, { createContext, useContext, useMemo } from 'react';
import useComplexState, {
  usePersistanceComplexState,
} from '../hooks/useComplexState';

export default function makeStore(name, { persistance = false } = {}) {
  const ValueContext = createContext();
  const DispatchContext = createContext();

  if (name) {
    ValueContext.displayName = `${name} - Store_value`;
    DispatchContext.displayName = `${name} - Store_dispatch`;
  }

  const Provider = ({ children, initialValue }) => {
    const stateHook = persistance
      ? usePersistanceComplexState
      : useComplexState;
    const [state, setState, forceState] = stateHook(initialValue, name);
    const dispatchers = useMemo(
      () => [setState, forceState],
      [forceState, setState],
    );
    return (
      <DispatchContext.Provider value={dispatchers}>
        <ValueContext.Provider value={state}>{children}</ValueContext.Provider>
      </DispatchContext.Provider>
    );
  };

  const useStore = () => {
    const context = useContext(ValueContext);
    if (process.env.NODE_ENV !== 'production' && !context) {
      throw new Error(`You Can't use store ${name}, without Provider`);
    }
    return context;
  };
  const useDispatch = () => {
    const context = useContext(DispatchContext);
    if (process.env.NODE_ENV !== 'production' && !context) {
      throw new Error(`You Can't use store ${name}, withour Provider`);
    }
    return context;
  };

  return { Provider, useStore, useDispatch };
}
