import React from 'react';
import Switch from '@material-ui/core/Switch';
import Layout from '../Layout';

const SwitchControl = (props) => {
  return <Switch {...props} checked={props.checked} name={props.name} />;
};

export default (props) => (
  <Layout>
    <SwitchControl {...props} />
  </Layout>
);
