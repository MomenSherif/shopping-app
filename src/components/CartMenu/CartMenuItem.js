import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import makeStyles from '@material-ui/styles/makeStyles';

import { formatPrice } from '../../utils';
import {
  useDecrementProductCount,
  useIncrementProductCount,
  useRemoveFromCart,
} from '../../stores/cart';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    padding: theme.spacing(1),
  },
  details: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    maxWidth: 300,
  },
  cover: {
    borderRadius: '50%',
    width: 80,
    height: 80,
    backgroundImage: 'cover',
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const CartMenuItem = React.forwardRef(({ product }, ref) => {
  const classes = useStyles();
  const { id, title, category, image, price, count } = product;
  const removeFromCart = useRemoveFromCart(id);
  const increment = useIncrementProductCount(id);
  const decrement = useDecrementProductCount(id);

  return (
    <MenuItem disableRipple innerRef={ref}>
      <Card className={classes.root} elevation={0}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="body2" noWrap>
              {title}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {category}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <ButtonGroup
              size="small"
              aria-label="Increment and Decrement your product purchase"
            >
              <Button onClick={decrement} disabled={count === 1}>
                -
              </Button>
              <Button variant="contained" color="primary">
                {count} * {formatPrice(price)}
              </Button>
              <Button onClick={increment}>+</Button>
            </ButtonGroup>
            <IconButton aria-label="delete" onClick={removeFromCart}>
              <DeleteIcon color="secondary" />
            </IconButton>
          </div>
        </div>
        <CardMedia className={classes.cover} image={image} title={title} />
      </Card>
    </MenuItem>
  );
});

export default CartMenuItem;
