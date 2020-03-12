import { ADD_PRODUCT_BASKET,GET_NB_BASKET } from "../actions/Types";

const initialState={
   nbBasket:0,
   cartCost:0,
  products:{
    Lia:{
      nom: "Lia",
    prix:"200",
    taille:"",
    image:"",
    stock:"",
    inCart:false
    }
    
  }}
  // nbBasket:0,
  // cartCost:0,
  // product:{
  //   caftan:{
  //     nom:"Noa",
  //     prix:200,
  //     taille:"S",
  //     stock:0,
  //     inCart:false,
  //   },
  //   djellaba:{
  //     nom:"alba",
  //     prix:200,
  //     taille:"M",
  //     stock:0,
  //     inCart:false,
  //   },
  //   babouche:{
  //     nom:"Sabrina",
  //     prix:100,
  //     taille:"S",
  //     stock:0,
  //     inCart:false,
  //   }
 // }


export default (state=initialState,action)=>{
  switch (action.type){
    case ADD_PRODUCT_BASKET:
     
      let addQuantity={...state.products[action.payload]}
      addQuantity.stock += 1;
      addQuantity.inCart = true;

      console.log("addQuantity",addQuantity);
      return{
        ...state,
        nbBasket:state.nbBasket + 1,
       cartCost:state.cartCost + state.products[action.payload].prix,
        products:{
          ...state.products,
          [action.payload]:addQuantity
        }

      }
      // return {
      //   ...state,
      //   productToAdd: Object.assign({}, action.payload)
      // };
      case GET_NB_BASKET:
        return {
          ...state
        }
    default:
      return state;
  }

}