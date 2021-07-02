import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import Menu from '../Menu';
import CartMenuItem from './CartMenuItem';
import { useCart } from '../../stores/cart';

export default function CartMenu() {
  const cart = useCart();
  return (
    <Menu
      renderTrigger={({ open }) => (
        <IconButton
          aria-label="shopping cart"
          aria-controls="shopping-cart"
          aria-haspopup="true"
          onClick={open}
        >
          <ShoppingCartOutlinedIcon />
        </IconButton>
      )}
    >
      {Object.values(cart).map((product) => (
        <CartMenuItem key={product.id} product={product} />
      ))}
    </Menu>
  );
}
