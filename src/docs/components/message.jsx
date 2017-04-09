import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { Message } from '../../modules';

export default () => (
  <Page>
    <h2>Components</h2>

    <ReactSpecimen span={3}>
      {
        <Message
          title={'Foo'}
          onClick={() => { alert('Close Message'); }}
          disabled={false}
        />
      }
    </ReactSpecimen>

  </Page>
);
