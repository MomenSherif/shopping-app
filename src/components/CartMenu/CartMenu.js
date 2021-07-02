import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';

import Menu from '../Menu';
import CartMenuItem from './CartMenuItem';
import { useCart } from '../../stores/cart';
import { isEmpty } from '../../utils';

export default function CartMenu() {
  const cart = useCart();
  return (
    <Menu
      renderTrigger={({ open }) => (
        <Badge
          color="secondary"
          badgeContent={Object.keys(cart).length}
          overlap="circle"
        >
          <IconButton
            aria-label="shopping cart"
            aria-controls="shopping-cart"
            aria-haspopup="true"
            onClick={open}
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </Badge>
      )}
    >
      {Object.values(cart).map((product) => (
        <CartMenuItem key={product.id} product={product} />
      ))}
      <ReviewOrder disabled={isEmpty(cart)} />
    </Menu>
  );
}

const ReviewOrder = withStyles((theme) => ({
  root: {
    display: 'block',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
  },
}))((props) => (
  <MenuItem component={Link} to="/review-order" {...props}>
    Review Order
  </MenuItem>
));
