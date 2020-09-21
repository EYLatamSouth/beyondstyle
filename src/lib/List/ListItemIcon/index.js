import React from 'react';
import { ListItemIcon as MuiListItemIcon } from '@material-ui/core';

import Layout from '../../Layout';

const ListItemIcon = (props) => {
  return <MuiListItemIcon {...props}>{props.children}</MuiListItemIcon>;
};

export default (props) => (
  <Layout>
    <ListItemIcon {...props} />
  </Layout>
);
