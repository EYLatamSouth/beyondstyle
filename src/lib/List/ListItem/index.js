import React from 'react';
import { ListItem as MuiListItem } from '@material-ui/core';
import Layout from '../../Layout';

const ListItem = (props) => {
  return <MuiListItem {...props}>{props.children}</MuiListItem>;
};

export default (props) => (
  <Layout>
    <ListItem {...props} />
  </Layout>
);
