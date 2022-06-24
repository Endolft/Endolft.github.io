import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card "   >
     
      <img src={url} alt={title} className="card-img-top rounded mx-auto d-block" />
      <div className="card-body">
      <p>{title}</p>
      </div>
    </div>
  );
};
