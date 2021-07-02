import { useState } from 'react';
import Masonry from 'react-masonry-css';
import TextField from '@material-ui/core/TextField';
import makeStyles from '@material-ui/core/styles/makeStyles';

import ProductCard from '../../components/ProductCard';

const useStyles = makeStyles((theme) => ({
  input: {
    marginBottom: theme.spacing(5),
  },
  grid: {
    display: 'flex',
    marginLeft: -30,
    width: 'auto',
  },
  column: {
    paddingLeft: 30,
    backgroundClip: 'padding-box',

    '& > *': {
      display: 'block',
      marginBottom: 30,
    },
  },
}));

export default function ProductsList({ products }) {
  const classes = useStyles();
  const [title, setTitle] = useState('');

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(title.toLowerCase()),
  );
  return (
    <>
      <TextField
        label="Search"
        fullWidth
        className={classes.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Masonry
        breakpointCols={{
          default: 3,
          1180: 2,
          767: 1,
        }}
        className={classes.grid}
        columnClassName={classes.column}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Masonry>
    </>
  );
}
