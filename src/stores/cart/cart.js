import { makeStore } from '../../utils';

const { Provider, useStore, useDispatch } = makeStore('Cart', {
  persistance: true,
});

export default Provider;
export const useCart = useStore;
export const useSetCart = useDispatch;
