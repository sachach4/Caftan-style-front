import {ADD_PRODUCT_BASKET} from "./Types"

export const addBasket =(productName)=>{
  return(dispatch)=>{
    console.log("basket ajouter");
    console.log("produit dans action est ", productName)
    dispatch({
      type:ADD_PRODUCT_BASKET,
      payload:productName
    });
  }
}
