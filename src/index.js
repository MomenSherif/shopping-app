import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SnackbarProvider } from 'notistack';
import Slide from '@material-ui/core/Slide';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './stores/cart';

let theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#2D88FF',
    },
    secondary: {
      main: '#DB2777',
    },
    background: {
      paper: '#242526',
      default: '#18191A',
    },
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
    },
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={5}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        TransitionComponent={Slide}
      >
        <CartProvider initialValue={{}}>
          <CssBaseline />
          <App />
        </CartProvider>
      </SnackbarProvider>
    </ThemeProvider>
  </Router>,
  // </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
