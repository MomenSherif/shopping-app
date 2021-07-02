import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { formatPrice } from '../../utils';
import { useAddToCart } from '../../stores/cart';

const useStyles = makeStyles((theme) => ({
  description: {
    marginBottom: theme.spacing(2),
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2,
  },
  content: {
    flex: '1 0 auto',
  },
  link: {
    textDecoration: 'none',
    color: 'currentColor',
    display: 'flex',
    alignItems: 'flex-start',
  },
  cover: {
    // flex: 1,
    padding: 20,
    width: 250,
    height: 250,
    objectFit: 'cover',
    borderRadius: '50%',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default function ProductCardHorizontal({ product }) {
  const { id, title, price, description, category, image } = product;

  const addToCart = useAddToCart(product);
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea className={classes.root}>
        <Link to={`/products/${id}`} className={classes.link}>
          <div className={classes.details}>
            <CardContent>
              <Typography component="h2" variant="h4">
                {title}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                className={classes.description}
              >
                {category} | {formatPrice(price)}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {description}
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image={image}
            title={title}
            component="img"
          />
        </Link>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          disableElevation
          color="primary"
          fullWidth
          onClick={addToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
