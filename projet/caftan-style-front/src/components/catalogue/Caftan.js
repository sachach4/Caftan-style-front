import React, { useEffect, useState } from "react";
import "./caftan.css";
import { Link } from "react-router-dom";

function Caftan() {
  const productAPI = "http://localhost:8000/api/categories/Caftan";
  const [caftan, setCaftan] = useState([]);
  const getProductData = async () => {
    const response = await fetch(productAPI);
    const data = await response.json();
    console.log( 'caftan',data);
    setCaftan(data);
    console.log( 'caftan',data);

    //return babouche;
  };
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <>
      <h2>Caftan</h2>
      <div className="cataloguecaftan">
      
        {caftan &&
          caftan.map((caf, i) => {
            
            return (
              
              <Link to={`/${caf['Products.id']}`} key={i}>
              <div className="caftan">
                <img className="imagecaftan" src={caf['Products.image']} />
                <div className="nom"> {caf['Products.nom']}</div>
                <div className="prix"> {caf['Products.prix']}</div>
                
              </div>
              </Link>
              
            );
          })}
      </div>
    </>
  );
}
export default Caftan;
