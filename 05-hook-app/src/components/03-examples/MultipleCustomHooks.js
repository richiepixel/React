import React from 'react';
import useCounter from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/css/effects.css';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0]; //Si existe la data (no es null) extrae la info en la posición 0
  // console.log(state);

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-3">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button className="btn btn-primary" onClick={increment}>
        Siguiente quote
      </button>
    </div>
  );
};
