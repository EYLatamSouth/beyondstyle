import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, fade } from '@material-ui/core/styles';
import { Select as Field } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import UnfoldMoreRoundedIcon from '@material-ui/icons/UnfoldMoreRounded';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import { clone, omit } from 'lodash';
import Theme from '../Theme';

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
  labelOutlined: (props) => ({
    transform: props.startAdornment
      ? 'translate(46px, 20px) scale(1)'
      : 'translate(14px, 20px) scale(1)'
  }),
  labelDisabled: {
    color: `${fade(theme.palette.primary.main, 0.3)} !important`
  },
  labelError: {
    color: `${theme.palette.error.main} !important`
  },
  inputRoot: (props) => ({
    backgroundColor: props.variant === 'filled'
      ? theme.palette.grey[100]
      : 'transparent',
    '&:hover': {
      backgroundColor: props.variant === 'filled'
        ? theme.palette.grey[100]
        : 'transparent'
    },
    '& .MuiSelect-root': {
      backgroundColor: props.variant === 'filled'
      ? theme.palette.grey[100]
      : 'transparent'
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
    },
    '& legend': {
      maxWidth: props.shrink ? '1000px' : '0'
    }
  }),
  filledUnderline: {
    '&:before': {
      borderColor: theme.palette.grey[300]
    }
  },
  filledFocused: (props) => ({
    backgroundColor: props.variant === 'filled'
      ? `${theme.palette.grey[100]} !important`
      : 'transparent'
  }),
  filledDisabled: (props) => ({
    backgroundColor: props.variant === 'filled'
      ? `${theme.palette.grey[100]} !important`
      : 'transparent',
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
  }),
  outilneError: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: `${theme.palette.error.main} !important`
    }
  }
}));

const Select = (props) => {
  const inputRef = useRef();
  const [shrink, setShrink] = useState(false);
  const classes = useStyles({
    color: props.color,
    startAdornment: props.inputicon,
    variant: props.variant,
    shrink: props.InputLabelProps?.shrink ? true : shrink
  });

  const otherProps = omit(clone(props), ['onOpen', 'onClose', 'onChange']);

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

  const onOpen = (event) => {
    setShrink(true);
    props.onOpen(event);
  };

  const onClose = (event) => {
    if (!hasValue()) {
      setShrink(false);
    }
    props.onClose(event);
  };

  const onChange = (event) => {
    if (event.target.value) {
      setShrink(true);
    }
    props.onChange(event);
  };

  if (props.inputicon) {
    startAdornment = (
      <InputAdornment position='start'>
        <props.inputicon />
      </InputAdornment>
    );
  }

  return (
    <FormControl {...otherProps} fullWidth>
      <InputLabel
        {...otherProps}
        classes={{
          root: props.variant === 'filled' ? classes.labelRoot : null,
          disabled: classes.labelDisabled,
          error: classes.labelError,
          filled: classes.labelFilled,
          outlined: classes.labelOutlined,
          shrink: props.variant === 'filled' ? classes.labelFilledShrink : null
        }}
        shrink={props.InputLabelProps?.shrink ? true : shrink}
      >
        {props.label}
      </InputLabel>
      <Field
        ref={inputRef}
        {...props}
        onClose={onClose}
        onOpen={onOpen}
        onChange={onChange}
        IconComponent={UnfoldMoreRoundedIcon}
        MenuProps={{
          PaperProps: {
            elevation: 3,
            style: {
              maxHeight: '256px'
            }
          }
        }}
        input={
          <InputComponent
            {...otherProps}
            startAdornment={startAdornment}
            classes={{
              root: classes.inputRoot,
              focused: classes.filledFocused,
              disabled: classes.filledDisabled,
              error: classes.outilneError
            }}
          />
        }
      >
        {props.children}
      </Field>
      <FormHelperText>{props.helptext}</FormHelperText>
    </FormControl>
  );
};

Select.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  variant: PropTypes.oneOf(['filled', 'outlined']),
  inputicon: PropTypes.elementType,
  helptext: PropTypes.string,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  onChange: PropTypes.func
};

Select.defaultProps = {
  color: 'primary',
  variant: 'filled',
  inputicon: null,
  helptext: '',
  onClose: () => {},
  onOpen: () => {},
  onChange: () => {}
};

export default (props) => (
  <Theme>
    <Select {...props} />
  </Theme>
);
