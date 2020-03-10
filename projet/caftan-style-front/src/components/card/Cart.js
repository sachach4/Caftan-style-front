// import React, { useContext, useState } from "react";
// import { useSpring, animated } from "react-spring";
// import { Card, Image, Icon } from "semantic-ui-react";
// import { CartContext } from "../../router/index";

// export default function Cart({ data }) {
//   const { addToCart } = useContext(CartContext);
//   const [caft, setCaft] = useState(false);
//   const props = useSpring({ to: { x: caft ? 0 : 1 } });
//   console.log('cartcontext cart',CartContext);
//   console.log('props cart',props);
//   console.log('data cart',data)

//   function handleAddToCart(data) {
//     setCaft(!caft);
//     addToCart(data);
//     }

//   return (

//     <Card style={{ height: "100%" }}>
//       <Image src={data['Products.image']} wrapped ui={false} style={{ width: 120 }} /> 
//       <Card.Content>
//         <Card.Header>{data.nom}</Card.Header>
//      {/* <Card.Meta>
//            <span className="date">publié en {data.year}</span>
//        </Card.Meta>  */}
//        <Card.Description></Card.Description>
//      </Card.Content> 
//        <Card.Content extra>
//          <animated.div
//            style={{
//              transform: props.x
//                .interpolate({
//                  range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
//                  output: [1, 0.97, 0.95, 1.1, 0.95, 1.1, 1.03, 1]
//                })
//                .interpolate(x => `scale(${x})`)
//          }}
//          >
//            <Icon 
//              name="add to cart"
//              size="big"
//              onClick={() => handleAddToCart(data)}
//              style={{ cursor: "pointer" }}
//            />
//          </animated.div>
//        </Card.Content> */}
//      </Card>
//   );
// }

// // import React,{useContext} from 'react';
// // import {CartContext} from './CartContext';
// // import Produit from './Produit'

// // export const Cart = () => {
// //   const [caftan,setCaftan] = useContext(CartContext);
// //   const totalPrix= caftan.reduce((caf,curr) => caf + curr['Products.prix'], 0
  
  
// //   )
// //   console.log("caaaaaaaaaafta",curr['Products.prix']);
  
  
  
// //   return(
// //     <div>
// //       <span>prix:{caftan["Products.prix"]}</span>
// //       <br />
// //       <span>Total:{totalPrix}</span>
// //        <br/>
// //      {caftan.map(item=>(<h6>{item.prix}</h6>))}
// //     </div>
// //   )
// // }