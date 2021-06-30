import React from 'react';
import Masonry from 'react-masonry-css';
import makeStyles from '@material-ui/core/styles/makeStyles';

import ProductCard from '../../components/ProductCard';

const useStyles = makeStyles((theme) => ({
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

  return (
    <Masonry
      breakpointCols={{
        default: 3,
        1180: 2,
        767: 1,
      }}
      className={classes.grid}
      columnClassName={classes.column}
    >
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Masonry>
  );
}
