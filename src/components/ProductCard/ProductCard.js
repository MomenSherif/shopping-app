import ProductCardVertical from './ProductCardVertical';
import ProductCardHorizontal from './ProductCardHorizontal';

export default function ProductCard({ product, variant = 'vertical' }) {
  return variant === 'vertical' ? (
    <ProductCardVertical product={product} />
  ) : (
    <ProductCardHorizontal product={product} />
  );
}
