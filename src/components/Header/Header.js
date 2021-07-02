import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
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
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    color: theme.palette.primary.dark,
    backgroundColor: '#fff',
    marginLeft: theme.spacing(3),
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
          <Avatar color="primary" className={classes.avatar}>
            M
          </Avatar>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
