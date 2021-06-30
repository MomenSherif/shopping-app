import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { formatPrice } from '../../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: 'none',
  },
  image: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function ProductCard({
  id,
  title,
  price,
  description,
  category,
  image,
}) {
  const classes = useStyles();
  return (
    <Link to={`/products/${id}`} className={classes.root}>
      <Card>
        <CardHeader title={title} subheader={formatPrice(price)} />
        <CardMedia
          // component="img"
          image={image}
          title={title}
          className={classes.image}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" disableElevation color="primary">
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}
