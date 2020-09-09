import React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../layout';

const ProgressBar = ({ bgcolor, completed }) => {
  const containerStyles = {
    height: 20,
    width: 'auto',
    backgroundColor: '#e0e0de',
    borderRadius: 50
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right'
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  };

  return (
    <Layout>
      <Typography variant="h3">People Advisory Services (qwe)</Typography>
    </Layout>
  );
};

export default ProgressBar;
