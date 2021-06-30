import Typography from '@material-ui/core/Typography';

import ProductsList from './ProductsList';
import Spinner from '../../components/Spinner';
import { useQuery } from '../../hooks';
import { getProducts } from '../../api/products';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2),
  },
}));

export default function Home() {
  const { loading, data: products } = useQuery(getProducts);
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2" component="h1" className={classes.title}>
        Available Products
      </Typography>
      {loading ? <Spinner /> : <ProductsList products={products} />}
    </>
  );
}
