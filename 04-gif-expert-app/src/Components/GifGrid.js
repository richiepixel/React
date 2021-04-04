import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
// import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  const { data, loading } = useFetchGifs(); //const state = useFetchGifs();
  console.log(data);
  console.log(loading);

  // useEffect(() => {
  //   getGifs(category).then(setImages); // (imgs) => setImages(imgs)
  // }, [category]); //Cada que la categoria cambia se ejcutará de nuevo.

  return (
    <>
      <h3>{category}</h3>

      {loading ? 'Cargando...' : 'Data cargada'}

      {/*  <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} /> //{...img} = (img = {img})
        ))}
      </div> */}
    </>
  );
};

export default GifGrid;
