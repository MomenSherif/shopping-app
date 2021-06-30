import { Container } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
  },
}));
export default function Layout({ children }) {
  const classes = useStyles();
  return <Container className={classes.root}>{children}</Container>;
}
