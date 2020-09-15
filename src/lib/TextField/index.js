import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { TextField as Field } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import Layout from '../Layout';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormHelperText-root': {
      letterSpacing: '0.004em',
      lineHeight: theme.typography.pxToRem(20)
    },
    '& .textarea-count-help': {
      textAlign: 'right'
    }
  },
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
  outilneError: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: `${theme.palette.error.main} !important`
    }
  }
}));

const TextField = (props) => {
  const inputRef = useRef();
  const [shrink, setShrink] = useState(false);
  const [valueLength, setValueLength] = useState(0);

  const classes = useStyles({
    color: props.color,
    startAdornment: !!props.InputProps?.startAdornment
  });

  useEffect(() => {
    if (hasValue() || props.value) {
      setShrink(true);
    }
  }, []);

  const hasValue = () => {
    let tag = 'input';
    if (props.multiline) {
      tag = 'textarea';
    }

    const value = inputRef.current.getElementsByTagName(tag)[0].value;
    setValueLength(value?.length);
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

  const onChange = (event) => {
    setValueLength(event.target.value?.length);
    props.onChange(event);
  };

  const renderCountElement = () => {
    if (!props.multiline) return props.helperText;
    if (!props.caractereslength) return props.helperText;

    return (
      <div className='textarea-count-help'>
        <span>{valueLength}</span>/{props.caractereslength} caracteres
      </div>
    );
  };

  if (props.variant === 'outlined') {
    return (
      <Field
        {...props}
        ref={inputRef}
        variant='outlined'
        helperText={renderCountElement()}
        classes={{
          root: classes.root
        }}
        onChange={onChange}
        InputLabelProps={{
          classes: {
            disabled: classes.labelDisabled,
            error: classes.labelError
          }
        }}
        InputProps={{
          classes: {
            error: classes.outilneError
          }
        }}
      />
    );
  }

  return (
    <Field
      {...props}
      ref={inputRef}
      variant='filled'
      classes={{ root: classes.root }}
      onChange={onChange}
      helperText={renderCountElement()}
      InputLabelProps={{
        shrink: props.InputLabelProps?.shrink ? true : shrink,
        classes: {
          root: classes.labelRoot,
          filled: classes.labelFilled,
          shrink: classes.labelFilledShrink,
          disabled: classes.labelDisabled,
          error: classes.labelError
        }
      }}
      InputProps={{
        ...props.InputProps,
        onFocus: onFocus,
        onBlur: onBlur,
        classes: {
          root: classes.filled,
          underline: classes.filledUnderline,
          focused: classes.filledFocused,
          disabled: classes.filledDisabled
        }
      }}
    />
  );
};

TextField.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  variant: PropTypes.oneOf(['filled', 'outlined']),
  caractereslength: PropTypes.number,
  onChange: PropTypes.func
};

TextField.defaultProps = {
  color: 'primary',
  variant: 'filled',
  caractereslength: 0,
  onChange: () => {}
};

export default (props) => (
  <Layout>
    <TextField {...props} />
  </Layout>
);
