import React from 'react';
import { helloWorld } from '../modules/hello.module';

export const App = () => {
  return (
    <div>
      { helloWorld() }
    </div>
  );
}

export default App;
