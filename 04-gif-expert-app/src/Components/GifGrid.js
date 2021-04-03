import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?q=Zelda&limit=10&api_key=k2NcfwazWMwi3WgWRl2oxOQqDPDmAv58';
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.log('gifs: ', gifs);
    setImages(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
          /* <ol>
        {images.map((
          { id, title } //Es lo mismo que img pero desestrucutrado
        ) => (
          <li key={id}>{title}</li> //Lo mismo que img.id e img.title
        ))}
      </ol> */
          images.map((img) => (
            <GifGridItem key={img.id} {...img} /> //{...img} = (img = {img})
          ))
        }
      </div>
    </>
  );
};

export default GifGrid;
