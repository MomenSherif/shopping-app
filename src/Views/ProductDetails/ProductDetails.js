import { useParams } from 'react-router-dom';

import Spinner from '../../components/Spinner';
import ProductCard from '../../components/ProductCard';
import { useQuery } from '../../hooks';
import { getProduct } from '../../api/products';

export default function ProductDetails() {
  const { id } = useParams();
  const { loading, data } = useQuery(() => getProduct(id));

  if (loading) return <Spinner />;
  return <ProductCard product={data} />;
}
