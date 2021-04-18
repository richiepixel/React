import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/css/effects.css';

const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <div>
      <h1>useCallBack Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallBackHook;
