import React, {  useState } from "react";

import { AddCategory } from "./componentes/AddCategory";
import { GifGrid } from "./componentes/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <div className="container">
      <h1 className="card-title animate__animated animate__fadeIn">
        {" "}
        GifExpertApp{" "}
      </h1>
      <div className="container">
      
          
            <AddCategory setCategories={setCategories} />
          
        
      </div>
      <hr />

      <ol>
        
         
          


        {categories.map((category) => (
          
          <GifGrid key={category} category={category} />
        
        ))}
            

        
      </ol>
    </div>
  );
};

export default GifExpertApp;
