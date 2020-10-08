import React from 'react';
import PropTypes from 'prop-types';
import { TablePagination as TablePaginationMui } from '@material-ui/core';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';

import FirstPageRoundedIcon from '@material-ui/icons/FirstPageRounded';
import LastPageRoundedIcon from '@material-ui/icons/LastPageRounded';
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@material-ui/icons/KeyboardArrowLeftRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';

import Theme from '../Theme';
import IconButton from '../IconButton';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
  disabled: {
    color: `${fade(theme.palette.primary.main, 0.5)} !important`,
    backgroundColor: ' transparent !important'
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  console.log(props);
  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
        className={page === 0 ? classes.disabled : null}
      >
        {theme.direction === 'rtl' ? <LastPageRoundedIcon /> : <FirstPageRoundedIcon />}
      </IconButton>
      <IconButton
        className={page === 0 ? classes.disabled: null}
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRightRoundedIcon /> : <KeyboardArrowLeftRoundedIcon />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        className={page >= Math.ceil(count / rowsPerPage) - 1 ? classes.disabled : null}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeftRoundedIcon /> : <KeyboardArrowRightRoundedIcon />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        className={page >= Math.ceil(count / rowsPerPage) - 1 ? classes.disabled : null}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageRoundedIcon /> : <LastPageRoundedIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(24),
    letterSpacing: '0.01em',
    color: theme.palette.primary.main,
    '& div > p:last-of-type': {
      color: theme.palette.primary.light,
    }
  },
  select: {
    border: `1px solid ${fade(theme.palette.primary.main, 0.3)}`,
    borderRadius: theme.spacing(0.5),
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(16),
    color: theme.palette.primary.main,
    minHeight: theme.spacing(4.5),
    minWidth: theme.spacing(8.5),
    marginLeft: theme.spacing(0.75),
    marginRight: theme.spacing(3.25),
    '& div': {
      textAlignLast: 'left'
    },
    '& svg': {
      color: theme.palette.primary.main
    }
  }
}));

const TablePagination = (props) => {
  const classes = useStyles();
  return (
    <TablePaginationMui
      {...props}
      className={classes.root}
      ActionsComponent={TablePaginationActions}
      SelectProps={{
        inputProps: { 'aria-label': 'rows per page' },
        className: classes.select,
        IconComponent: ArrowDropDownRoundedIcon
      }}
    />
  );
};

export default (props) => (
  <Theme>
    <TablePagination {...props} />
  </Theme>
);
