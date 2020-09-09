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
