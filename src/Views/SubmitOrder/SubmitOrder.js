import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { useCart, useResetCart } from '../../stores/cart';
import { isEmpty } from '../../utils';

const emailRegExp =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const phoneRegExp = /^1[0125]\d{8}$/;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(4),
    },
  },
}));

// TODO: Abstract form controls to separate components
function SubmitOrder() {
  const classes = useStyles();
  const { register, handleSubmit, formState } = useForm({ mode: 'onTouched' });
  const { errors } = formState;

  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const resetCart = useResetCart();

  const onSubmit = (data) => {
    console.log(data);
    enqueueSnackbar('Order submitted successfully!', { variant: 'success' });
    resetCart();
    history.replace('/');
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <TextField
        variant="outlined"
        label="Address"
        fullWidth
        error={!!errors.address}
        helperText={errors.address?.message}
        InputLabelProps={{
          shrink: true,
        }}
        {...register('address', { required: 'Address is Required!' })}
      />
      <TextField
        variant="outlined"
        label="phone"
        fullWidth
        error={!!errors.phone}
        helperText={errors.phone?.message}
        InputProps={{
          startAdornment: <InputAdornment position="start">+20</InputAdornment>,
        }}
        {...register('phone', {
          required: 'Phone is Required!',
          pattern: {
            value: phoneRegExp,
            message: 'Phone is not valid.',
          },
          setValueAs: (v) => `+20${v}`, //! is not working, try to open PR
        })}
      />
      <TextField
        variant="outlined"
        label="Email"
        type="email"
        fullWidth
        error={!!errors.email}
        helperText={errors.email?.message}
        InputLabelProps={{
          shrink: true,
        }}
        {...register('email', {
          required: 'Email is Required.',
          pattern: {
            value: emailRegExp,
            message: 'Email is not valid.',
          },
        })}
      />
      <Button
        type="submit"
        variant="contained"
        size="large"
        color="primary"
        fullWidth
      >
        Submit
      </Button>
    </form>
  );
}

export default () => {
  const cart = useCart();

  if (isEmpty(cart))
    return (
      <Typography variant="h6" align="center">
        Buy yacta shwyt 7agat 😢
      </Typography>
    );

  return <SubmitOrder />;
};
