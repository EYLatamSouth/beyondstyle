import React from 'react';
import { Layout } from 'beyondstyle';
import { Container } from 'theme-ui';

import * as styles from './styles'

export const MainContainer = ({ children, ...rest }) => {
  return (
    <Layout>
      <Container sx={styles.container} {...rest}>
        {children}
      </Container>
    </Layout>
  )
}
