import { useState } from 'react';

export const useFetchGifs = () => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  setTimeout(() => {
    setstate(
      {
        data: [1, 2, 3, 4, 5],
        loading: false,
      },
      10000
    );
  });
  return state; //{data:[], loading: true}
};
