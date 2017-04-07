import React from 'react';
import { Button } from './modules';

const App = () => (
  <div>
    <h1>Styleguide Playground</h1>
    <Button
      name="The Button"
      onClick={() => console.log('You clicked it!')}
    />
  </div>
);

export default App;
