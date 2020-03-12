import {combineReducers} from "redux";
//import {connectRouter} from "connected-react-router"
//import history from "../"
import auth from "./authReducer";
import basketReducer from "./basketReducer";

export default combineReducers({
  //router:connectRouter(history),
  basketState:basketReducer,
  auth

})