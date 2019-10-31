import React from 'react';

export const Num = ({ resource }) => {
  const n = resource.num.read();

  return (
    <>
      <h1>This task was intentionally slowed down by 2500ms</h1>
      <div>Random Number: ${n}</div>
    </>
  );
};
