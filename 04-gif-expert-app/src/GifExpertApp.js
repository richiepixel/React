import React, { useState } from 'react';
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {
  // const [categories, setCategories] = useState(['Zelda']);
  const [categories, setCategories] = useState(defaultCategories);
  // const handleAdd = () => {
  //   setCategories((c) => [...categories, 'Chivas']);
  // };

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
