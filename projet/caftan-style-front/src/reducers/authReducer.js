import * as types from "../actions/Types";

const initialState={
  isAuth : false,
  user:{},
  isLoading:false
}
export default function Auth(state= initialState,action){
  switch (action.type) {
    case types.CHECK_TOKEN:

    return {
      ...state,
      isAuth:action.payload ? true :false,
      user:action.payload
    };
    default:
      return state;
  }
}
