//import React from "react";
import React, { useEffect, useState } from "react";
import "./caftan.css";
import { Link } from "react-router-dom";

function Babouche() {
  const productAPI = "/api/categories/Babouche";
  const [babouche, setBabouche] = useState([]);
  const getProductData = async () => {
    const response = await fetch(productAPI);
    const data = await response.json();
    setBabouche(data);
  
    console.log( data[0]['Products.prix']);

    //return babouche;
  };
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <>
      <h2>Caftan</h2>
      <div className="cataloguecaftan">
      
        {babouche &&
          babouche.map((bab, i) => {
            
            return (
              
              <Link to={`/${bab.id}`} key={i}>
              <div className="caftan">
                <img className="imagecaftan" src={bab['Products.image']} />
                <div className="nom"> {bab['Products.nom']}</div>
                <div className="prix"> {bab['Products.prix']}</div>
              </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}
export default Babouche;
