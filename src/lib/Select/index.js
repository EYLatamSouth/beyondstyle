import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, fade } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Select as Field } from '@material-ui/core';
import Layout from '../Layout';
import UnfoldMoreRoundedIcon from '@material-ui/icons/UnfoldMoreRounded';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
  labelRoot: {
    lineHeight: theme.typography.pxToRem(24),
    fontSize: theme.typography.pxToRem(16)
  },
  labelFilledShrink: {
    fontSize: theme.typography.pxToRem(12)
  },
  labelFilled: (props) => ({
    transform: props.startAdornment
      ? 'translate(46px, 16px) scale(1)'
      : 'translate(12px, 16px) scale(1)',
    '&.MuiInputLabel-shrink': {
      transform: props.startAdornment
        ? 'translate(46px, 8px) scale(0.75)'
        : 'translate(12px, 8px) scale(0.75)'
    }
  }),
  labelDisabled: {
    color: `${fade(theme.palette.primary.main, 0.3)} !important`
  },
  labelError: {
    color: `${theme.palette.error.main} !important`
  },
  filled: {
    backgroundColor: theme.palette.grey[100],
    '&:hover': {
      backgroundColor: theme.palette.grey[100]
    },
    '& .MuiInputAdornment-positionStart': {
      marginTop: `${0} !important`,
      color: theme.palette.grey[300]
    },
    '& .MuiInputAdornment-positionEnd': {
      color: theme.palette.grey[600],
      '& .MuiIconButton-root': {
        color: theme.palette.grey[600]
      }
    }
  },
  filledUnderline: {
    '&:before': {
      borderColor: theme.palette.grey[300]
    }
  },
  filledFocused: {
    backgroundColor: `${theme.palette.grey[100]} !important`
  },
  filledDisabled: {
    backgroundColor: `${theme.palette.grey[100]} !important`,
    color: `${fade(theme.palette.primary.main, 0.3)} !important`,
    '&.MuiFilledInput-underline.Mui-disabled': {
      '&:before': {
        borderBottomStyle: 'solid',
        borderColor: 'transparent'
      },
      '&:hover:before': {
        borderColor: theme.palette.grey[300],
        borderWidth: 2
      }
    }
  },
}));

const Select = (props) => {
  const inputRef = useRef();
  const [shrink, setShrink] = useState(false);
  const classes = useStyles({
    color: props.color,
    startAdornment: props.inputicon
  });
  let startAdornment = null;
  const InputComponent = {
    outlined: OutlinedInput,
    filled: FilledInput
  }[props.variant];

  useEffect(() => {
    if (hasValue() || props.value) {
      setShrink(true);
    }
  }, []);

  const hasValue = () => {
    const value = inputRef.current.getElementsByTagName('input')[0].value;
    return !!value;
  };

  const onFocus = () => {
    setShrink(true);
  };

  const onBlur = () => {
    if (!hasValue()) {
      setShrink(false);
    }
  };

  if (props.inputicon) {
    startAdornment = (
      <InputAdornment position='start'>
        <AccountCircle />
      </InputAdornment>
    );
  }

  return (
    <FormControl variant={props.variant} fullWidth>
      <InputLabel
        id={props.id}
        classes={{
          root: classes.labelRoot,
          disabled: classes.labelDisabled,
          error: classes.labelError,
          filled: classes.labelFilled,
          shrink: classes.labelFilledShrink
        }}
        shrink={props.InputLabelProps?.shrink ? true : shrink}
      >
        {props.label}
      </InputLabel>
      <Field
        ref={inputRef}
        {...props}
        onClose={onBlur}
        onOpen={onFocus}
        IconComponent={UnfoldMoreRoundedIcon}
        input={
          <InputComponent
            startAdornment={startAdornment}
            classes={{
              root: classes.filled,
              underline: classes.filledUnderline,
              focused: classes.filledFocused,
              disabled: classes.filledDisabled
            }}
          />
        }
      >
        {props.children}
      </Field>
    </FormControl>
  );
};

Select.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  variant: PropTypes.oneOf(['filled', 'outlined']),
  inputicon: PropTypes.elementType
};

Select.defaultProps = {
  color: 'primary',
  variant: 'filled',
  inputicon: null
};

export default (props) => (
  <Layout>
    <Select {...props} />
  </Layout>
);
