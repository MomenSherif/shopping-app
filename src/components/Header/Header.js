import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Menu from '../Menu';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    ...theme.typography.h6,
    color: 'currentColor',
    textDecoration: 'none',
  },
  cartButton: {
    marginLeft: 'auto',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container className={classes.container}>
          <Link className={classes.link} to="/">
            Shop
          </Link>
          <Menu
            renderTrigger={({ open }) => (
              <IconButton
                aria-label="shopping cart"
                aria-controls="shopping-cart"
                aria-haspopup="true"
                onClick={open}
                className={classes.cartButton}
              >
                <ShoppingCartOutlinedIcon />
              </IconButton>
            )}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
