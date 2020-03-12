import {GET_NB_BASKET} from "./Types"

export const getNb =()=>{
  return(dispatch)=>{
    dispatch({
      type:GET_NB_BASKET
    });
  }
}
