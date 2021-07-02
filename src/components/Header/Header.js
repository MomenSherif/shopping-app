import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CartMenu from '../CartMenu';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    ...theme.typography.h6,
    color: 'currentColor',
    textDecoration: 'none',
    marginRight: 'auto',
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
          <CartMenu />
        </Container>
      </Toolbar>
    </AppBar>
  );
}
