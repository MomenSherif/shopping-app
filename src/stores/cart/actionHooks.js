import { useSnackbar } from 'notistack';

import { useSetCart } from './cart';

export function useAddToCart(product) {
  const [setCart] = useSetCart();
  const { enqueueSnackbar } = useSnackbar();
  return () => {
    setCart((cart) => {
      const productCountInCart = cart[product.id]
        ? cart[product.id].count + 1
        : 1;
      return {
        ...cart,
        [product.id]: {
          ...product,
          count: productCountInCart,
        },
      };
    });
    enqueueSnackbar('Added to cart', {
      variant: 'success',
      autoHideDuration: 1000,
    });
  };
}

export function useRemoveFromCart(productId) {
  const [_, forceCartState] = useSetCart();
  return () => {
    forceCartState((cart) => {
      const { [productId]: productRemoved, ...rest } = cart;
      return rest;
    });
  };
}

export function useResetCart() {
  const [_, forceCartState] = useSetCart();
  return () => forceCartState({});
}

function productCountChangeBuilder(action) {
  return function useChangeProductCount(productId) {
    const [setCart] = useSetCart();

    return () => {
      setCart((cart) => {
        const updatedCount =
          action === 'increment'
            ? cart[productId].count + 1
            : cart[productId].count - 1;

        return {
          ...cart,
          [productId]: {
            ...cart[productId],
            count: updatedCount,
          },
        };
      });
    };
  };
}

export const useIncrementProductCount = productCountChangeBuilder('increment');
export const useDecrementProductCount = productCountChangeBuilder('decrement');
