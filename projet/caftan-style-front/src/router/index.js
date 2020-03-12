import React from "react";
import accueil from "../components/catalogue/Accueil";
import Caftan from "../components/catalogue/Caftan";
import Babouche from "../components/catalogue/Babouche";
import Djellaba from "../components/catalogue/Djellaba";
import DetailArticle from "../components/catalogue/DetailArticle";
import NavBar from "../components/navbar/NavBar";
import ConnexionContainer from "../containers/ConnexionContainer"
import Cart from "../components/card/Cart"
//import Footer from "../components/footer/Footer"
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Authentif from "../components/auth/Authentif"
import {Provider} from "react-redux";
import store from "../store";

 function AppRouter() {
   return (
    <>
     <Provider store={store}>
       <BrowserRouter>
        <NavBar/>
      <Switch>
          
          <Route  exact path="/" component={accueil}/>
          <Route path="/Caftan" component={Caftan}/>
          <Route path="/Djellaba" component={Djellaba}/>
          <Route path="/Babouche" component={Babouche}/>
          <Route path="/Connexion" component={ConnexionContainer}/>
          <Route path="/Authentif" component={Authentif}/>
          <Route path="/Cart" component={Cart}/>
          <Route path="/:id" component={DetailArticle}/>
      </Switch>
        {/* <Footer />  */}
        
       </BrowserRouter>
    </Provider>
  </>
  );
}

export default (AppRouter);



   