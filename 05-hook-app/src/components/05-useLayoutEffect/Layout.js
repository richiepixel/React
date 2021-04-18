import React, { useLayoutEffect, useRef, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './css/layout.css';

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const [boxSize, setBoxSize] = useState({});

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0]; //Si existe la data (no es null) extrae la info en la posición 0
  // console.log(state);

  const pTag = useRef();

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <blockquote className="blockquote text-end">
        <p className="mb-3" ref={pTag}>
          {quote}
        </p>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <button className="btn btn-primary" onClick={increment}>
        Siguiente quote
      </button>
    </div>
  );
};
