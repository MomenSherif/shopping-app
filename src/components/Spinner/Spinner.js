import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: theme.spacing('80px', 'auto'),
  },
}));

export default function Spinner() {
  const classes = useStyles();
  return <CircularProgress className={classes.root} />;
}
