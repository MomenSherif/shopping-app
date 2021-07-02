import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import { useCart } from '../../stores/cart';
import { formatPrice, isEmpty } from '../../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  price: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function OrderList({ products }) {
  const classes = useStyles();
  const totalPrice = products.reduce(
    (acc, curr) => acc + curr.count * curr.price,
    0,
  );

  return (
    <List className={classes.root}>
      {products.map((product) => (
        <ListItem key={product.id} component={Paper} elevation={3}>
          <ListItemIcon>Q: {product.count}</ListItemIcon>
          <ListItemText
            primary={product.title}
            secondary={formatPrice(product.price)}
          />
          <ListItemSecondaryAction className={classes.price}>
            {product.price * product.count}
            <AttachMoneyIcon />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
      <Typography variant="h4">Total: {formatPrice(totalPrice)}</Typography>
    </List>
  );
}

export default () => {
  const cart = useCart();
  const products = Object.values(cart);

  if (isEmpty(products))
    return (
      <Typography variant="h6" align="center">
        Buy yacta shwyt 7agat 😢
      </Typography>
    );

  return <OrderList products={products} />;
};
