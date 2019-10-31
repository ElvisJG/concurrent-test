import React from 'react';

export const Num = ({ resource }) => {
  const n = resource.num.read();

  return (
    <>
      <h1>This task was intentionally slowed down by 3 seconds</h1>
      <div>Your random number is ${n}</div>
    </>
  );
};
