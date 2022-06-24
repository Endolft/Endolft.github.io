import React, { Fragment } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <Fragment>
      <h3>{category}</h3>
      {loading && <p className="animate__animated animate__flash ">Loading...</p>}
      {
        <div className="card-grid animate__animated animate__slideInLeft">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      }
    </Fragment>
  );
};
