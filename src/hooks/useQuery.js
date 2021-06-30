import { useEffect } from 'react';
import { useRef } from 'react';

import useComplexState from './useComplexState';

export default function useQuery(queryFn, deps = []) {
  const [state, setState] = useComplexState({
    loading: true,
    data: null,
    error: null,
  });

  const queryFnRef = useRef();
  queryFnRef.current = queryFn;

  useEffect(() => {
    queryFnRef
      .current()
      .then((data) => setState({ data, loading: false }))
      .catch((error) => setState({ error, loading: false }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}
