import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { Button } from '../../modules';

export default () => (
  <Page>
    <h2>Components</h2>

    <ReactSpecimen span={3}>
      {
        <Button
          name={'Foo'}
          onClick={() => { alert('Button'); }}
          disabled={false}
        />
      }
    </ReactSpecimen>

  </Page>
);
