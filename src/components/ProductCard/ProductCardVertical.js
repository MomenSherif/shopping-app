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
  link: {
    textDecoration: 'none',
    color: 'currentColor',
  },
  image: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function ProductCardVertical({ product }) {
  const { id, title, price, description, category, image } = product;

  const addToCart = useAddToCart(product);
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <Link to={`/products/${id}`} className={classes.link}>
          <CardHeader
            title={title}
            subheader={category}
            action={
              <Typography variant="subtitle1">{formatPrice(price)}</Typography>
            }
          />
          <CardMedia image={image} title={title} className={classes.image} />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          disableElevation
          color="primary"
          onClick={addToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
