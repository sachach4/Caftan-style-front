import React from "react";
import Acceuil from "../components/catalogue/Acceuil";
import Caftan from "../components/catalogue/Caftan";
import Babouche from "../components/catalogue/Babouche";
import Djellaba from "../components/catalogue/Djellaba";
import DetailArticle from "../components/catalogue/DetailArticle";
//import Connexion from "../components/auth/Connexion";
import ConnexionContainer from "../containers/ConnexionContainer"
//import Cart from "../components/card/Cart"
import "./menu.css";
//import Footer from "../components/footer/Footer"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Authentif from "../components/auth/Authentif"
import {Provider} from "react-redux";
import store from "../store"
//import CaftanList from "../components/card/CaftanList";
//import {CartProvider} from "../components/card/CartContext"
//import Header from "../components/header/Header";
//import Home from "../components/home/Home";
//import logo from "../ass";
//import BookList from "./components/BookList";
//import CartSummary from "./components/CartSummary";
// import CartDetails from "../components/card/CartDetails";
// export const CartContext = createContext();
// const CART_KEY = "react-shop";

 function AppRouter() {
  return (
    <>
    <Provider store={store}>
     <Router>
    {/* <CartContext.Provider value={contextValue}> */}
   
      <div className="header-menu">
        <img src="/assets/logo.png" />
        <Link to="/Connexion">S'identifier</Link>
        {/* <Link to="/Authentif">Creer un compte</Link>  */}
        <div className="menu"> 
          <nav>
           <ul>
              <li>
                <Link to="/">Acceuil</Link>
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

          <Switch>
          <Route  exact path="/" component={Acceuil}/>
         
             <Route path="/Caftan" component={Caftan}/>
       
            <Route path="/Djellaba" component={Djellaba}/>
             
            <Route path="/Babouche" component={Babouche}/>
             
            <Route path="/Connexion" component={ConnexionContainer}/>
             
            <Route path="/Authentif" component={Authentif}/>
             
            <Route path="/:id" component={DetailArticle}/>
        </Switch>
          {/* <Footer /> */}
       
      </div>  
      {/* </CartContext.Provider>    */}
    </Router>
    </Provider>
    </>
  );
}
export default AppRouter;
//   const [cart, setCart] = useState({});
//   const [nbArticles, setNbArticles] = useState(0);
//   console.log("cart index:",cart)

//   useEffect(() => {
//     const cartFromStorage = localStorage.getItem(CART_KEY);
//     if (cartFromStorage !== null) {
//       setCart(JSON.parse(cartFromStorage));
//     }
//   }, []);

// useEffect(() => {
//   // only strings in localStorage
//   localStorage.setItem(CART_KEY, JSON.stringify(cart));
//   document.title = `caddie(${nbArticles})`;
// }, [cart, nbArticles]);

// function addToCart(item) {
//   console.log("item", item);
//   if (!cart[item.id]) {
//     cart[item.id] = item;
//     cart[item.id].quantity = 1;
//   } else {
//     cart[item.id].quantity += 1;
//   }
//   setCart({ ...cart });
//   console.log("cart", cart);
// }

// function removeFromCart(item) {
//   if (cart[item.id].quantity !== 1) {
//     cart[item.id].quantity = cart[item.id].quantity - 1;
//   } else {
//     delete cart[item.id];
//   }
//   setCart({ ...cart });
//   console.log("cart", cart);
// }
// function emptyCart() {
//   const response = window.confirm(
//     "Etes-vous vous sûr de vouloir vider le caddie ? "
//   );
//   if (response) {
//     setCart({});
//   }
// }

// function countCartArticles() {
//   let total = 0;
//   Object.keys(cart).map(key => (total += cart[key].quantity));
//   setNbArticles(total);
//   return total;
// }

// const contextValue = {
//   cart,
//   addToCart,
//   countCartArticles,
//   removeFromCart,
//   emptyCart
// };



   