import {combineReducers} from "redux";
//import {connectRouter} from "connected-react-router"
//import history from "../"
import auth from "./authReducer";


export default combineReducers({
  //router:connectRouter(history),
  auth

})