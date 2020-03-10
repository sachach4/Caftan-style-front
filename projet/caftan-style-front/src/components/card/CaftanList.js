
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// //import { Grid, Segment } from "semantic-ui-react";
// //import Cart from "./Cart";
// import { Link } from "react-router-dom";

// export default function CaftanList() {
//   const [caftans, setCaftans] = useState([]);
//   console.log('caftans======',caftans)
//   useEffect(() => {
//     axios.get("/api/categories/Caftan").then(res => {
//       const caftans = res.data;
//       setCaftans(caftans);
     
//     });
//   }, []);
  
//   return (
//     <>
//       <h2>Caftan</h2>
//       <div className="cataloguecaftan">
      
//         {caftans &&
//           caftans.map((caf, i) => {
            
//             return (
              
//               <Link to={`/${caf['Products.id']}`} key={i}>
//               <div className="caftan">
//                 <img className="imagecaftan" src={caf['Products.image']} />
//                 <div className="nom"> {caf['Products.nom']}</div>
//                 <div className="prix"> {caf['Products.prix']}</div>
//               </div>
//               </Link>
//              );
//           })}
//       </div>
//     </>
//   );
// }

// // import React, { useEffect, useContext } from "react";
// // import "../catalogue/caftan.css";
// // import { Link } from "react-router-dom";
// // import {CartContext} from './CartContext';

// // function Produit() {
// //   const productAPI = "/api/categories/Caftan";
// //   const [caftan, setCaftan] = useContext(CartContext);
// //   const getProductData = async () => {
// //     const response = await fetch(productAPI);
// //     const data = await response.json();
// //     console.log( 'caftan',data);
// //     setCaftan(data);
  
// //     console.log( 'caftan',data);

// //   };
// //   useEffect(() => {
// //     getProductData();
// //   }, []);

// //   const addToCart=()=>{
    
// //     setCaftan(currentState=>[...currentState,caftan])
// //   }
  

// //   return (
// //     <>
// //       <h2>Caftan</h2>
// //       <div className="cataloguecaftan">
      
// //         {caftan &&
// //           caftan.map((caf, i) => {
            
// //             return (
// //               <>
// //               <Link to={`/${caf['Products.id']}`} key={i}>
// //               <div className="caftan">
// //                 <img className="imagecaftan" src={caf['Products.image']} />
// //                 <div className="nom"> {caf['Products.nom']}</div>
// //                 <div className="prix"> {caf['Products.prix']}</div>
                
// //               </div>
// //               </Link>
              
// //               <button onClick={addToCart}>Ajouter au panier</button>
// //               <hr/>
// //               </>
              
// //             );
// //           })}
// //       </div>
// //     </>
// //   );
// // }
// // export default Produit;
