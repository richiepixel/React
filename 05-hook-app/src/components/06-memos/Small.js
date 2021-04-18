import React from 'react';

export const Small = React.memo(({ value }) => {
  console.log('Me llamé de nuevo :(');
  return <small>{value}</small>;
});
