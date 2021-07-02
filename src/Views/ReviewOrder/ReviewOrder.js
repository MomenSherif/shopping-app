import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import OrderList from './OrderList';

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2),
  },
}));

export default function ReviewOrder() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" component="h1" className={classes.title}>
        Review Order
      </Typography>
      <OrderList />
    </>
  );
}
