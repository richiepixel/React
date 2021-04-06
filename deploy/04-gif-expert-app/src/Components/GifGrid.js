import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category); //const state = useFetchGifs();

  return (
    <>
      <h3 className="animate__animated animate__bounceInLeft">{category}</h3>

      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} /> //{...img} = (img = {img})
        ))}
      </div>
    </>
  );
};

export default GifGrid;
