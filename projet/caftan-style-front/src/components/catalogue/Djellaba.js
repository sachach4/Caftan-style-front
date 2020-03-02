//import React from "react";
import React, { useEffect, useState } from "react";
import "./caftan.css";
import { Link } from "react-router-dom";

function Djellaba() {
  const productAPI = "/api/categories/Djellaba";
  const [djellaba, setDjellaba] = useState([]);
  const getProductData = async () => {
    const response = await fetch(productAPI);
    const data = await response.json();
    setDjellaba(data);
  
    //console.log( data[0]['Products.prix']);

    //return babouche;
  };
  useEffect(() => {
    getProductData();
  }, []);


  return (
    <>
      <h2>Caftan</h2>
      <div className="cataloguecaftan">
      
        {djellaba &&
          djellaba.map((jal, i) => {
            
            return (
              
              <Link to={`/${jal.id}`} key={i}>
              <div className="caftan">
                <img className="imagecaftan" src={jal['Products.image']} />
                <div className="nom"> {jal['Products.nom']}</div>
                <div className="prix"> {jal['Products.prix']}</div>
              </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}

//   return (
//     <>
//       <h2>Caftan</h2>
//       <div className="cataloguecaftan">
//         {djellaba &&
//           djellaba.map((jal, i) => {
//             return (
//               <div className="caftan">
//                 <img className="imagecaftan" src={jal['Products.image']} />
//                 <div className="nom"> {jal['Products.nom']}</div>
//                 <div className="prix"> {jal['Products.prix']}</div>
//               </div>
//             );
//           })}
//       </div>
//     </>
//   );
// }
export default Djellaba;

