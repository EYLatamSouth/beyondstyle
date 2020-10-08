import React from 'react';
import PropTypes from 'prop-types';
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
} from '../../theme/typography';
import { palette } from '../../theme/palette';

const theme = createMuiTheme({
  palette: { ...palette },
  typography: {
    fontFamily: '"EYInterstate", sans-serif',
    fontWeightMedium: 400
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

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired
};

export default Theme;
