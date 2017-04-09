import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { Lang } from '../../modules';

export default () => (
  <Page>
    <h2>Components</h2>

    <ReactSpecimen span={3}>
      {
        <Lang
          disabled={false}
        />
      }
    </ReactSpecimen>

  </Page>
);
