import React, { useEffect } from "react";
// import Babouche from "../../components/catalogue/Babouche";
// import Djellaba from "../../components/catalogue/Djellaba";
// import DetailArticle from "../../components/catalogue/DetailArticle";
//import Connexion from "../components/auth/Connexion";
//import ConnexionContainer from "../../containers/ConnexionContainer"
//import Cart from "../components/card/Cart"
import "./menu.css";
//import Footer from "../components/footer/Footer"
import { Link } from "react-router-dom";
// import Authentif from "../../components/auth/Authentif"
// import {Provider} from "react-redux";
// import store from "../store";
import {connect} from "react-redux";
import {getNb} from "../../actions/getActions"

  

const NavBar = (props) => {

  useEffect(()=>{
    getNb();
  },[])

  return (<div className="header-menu">
    
  <img src="/assets/logo.png" />
  <Link to="/Connexion"> S'identifier </Link>
  <Link to="/Cart" ><ion-icon name="basket-outline"></ion-icon>Panier
  <span>{props.basketProps.nbBasket}</span></Link>
  {/*<Link to="/Authentif">Creer un compte</Link>*/}
  
  <div className="menu"> 
    <nav>
     <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/Caftan">Caftan</Link>
        </li>
        <li>
          <Link to="/Djellaba">Djellaba</Link>
        </li>
        <li>
          <Link to="/Babouche">Babouche</Link>
        </li>
      </ul>
    </nav>
    </div>
</div>
)
};

const mapStateToProps=state =>({
  basketProps:state.basketState
});
export default connect(mapStateToProps,{getNb})(NavBar);


