import React, { Fragment } from "react";
import { connect } from "react-redux";

function Cart({basketProps}) {

  console.log("basketProps",basketProps)

  let productsInCart=[];
  Object.keys(basketProps.products).forEach(function (item){
    console.log(item);
   if (basketProps.products[item].inCart){
      productsInCart.push(basketProps.products[item])
   }
   console.log(productsInCart)

  })
  productsInCart=productsInCart.map((product,index)=>{
    return(
      <Fragment>
        <div>{product.nom}</div>
        <div>{product.prix}</div>
        

      </Fragment>
    )
  });
  return (
   
    <div>
      {productsInCart}
    </div>
  )
  

  }


  const mapStateToProps = state => ({
    basketProps : state.basketState
  });

export default connect(mapStateToProps)(Cart)

