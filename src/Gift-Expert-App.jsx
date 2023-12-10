import React, { useState } from "react";
import AddCategorys from "./Components/AddCategorys";
import GifGrid from "./Components/GifGrid";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState([""]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }

    setCategories([newCategory, ...categories]);
  };
  console.log(categories);
  return (
    <>
      <h1>App</h1>

      {/* Input */}
      <AddCategorys onNewCategory={onAddCategory} />

      {/* Listado de gifs */}
      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};

export default GiftExpertApp;
