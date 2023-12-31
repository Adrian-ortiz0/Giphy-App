import React, { useState, useEffect } from "react";
import getGifs from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => {
          return <GifGridItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;
