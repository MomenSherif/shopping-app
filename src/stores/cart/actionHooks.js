import { useSetCart } from './cart';

export function useAddToCart(product) {
  const setCart = useSetCart();

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
  };
}
