import React from 'react';
import helloWorld from '../../modules/hello.module';

export default function () {
  const result = helloWorld();
  return (
    <div>
      {result}
    </div>
  );
}
