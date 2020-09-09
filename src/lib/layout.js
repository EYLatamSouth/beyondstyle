import React from 'react';
import PropTypes from "prop-types"
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  EYInterstateLight,
  EYInterstateLightItalic,
  EYInterstateRegular,
  EYInterstateItalic,
  EYInterstateBold,
  EYInterstateBoldItalic,
  EYInterstateBlack
} from '../theme/typography';

const theme = createMuiTheme({
  status: {
    danger: 'red',
  },
  custonName: {
    red: 'red'
  },
  palette: {
    primary: {
      light: '#575762',
      main: '#2e2e38',
      dark: '#040312',
      contrastText: '#fff'
    },
    tertiary: {
      light: '#fff27f',
      main: '#ffd400',
      dark: '#c7a000',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
  },
  typography: {
    fontFamily: 'EYInterstate, Arial, sans-serif'
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          EYInterstateLight,
          EYInterstateLightItalic,
          EYInterstateRegular,
          EYInterstateItalic,
          EYInterstateBold,
          EYInterstateBoldItalic,
          EYInterstateBlack
        ]
      }
    }
  }
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
