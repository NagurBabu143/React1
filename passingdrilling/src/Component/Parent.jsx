import React from 'react';
import Child from './Child';

const Parent = () => {
  const message = "Hello from Parent!";
  return <Child message={message} />;
};

export default Parent;
