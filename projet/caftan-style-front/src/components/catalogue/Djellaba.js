//import React from "react";
import React, { useEffect, useState } from "react";
import "./caftan.css";
import { Link } from "react-router-dom";
import {connect} from "react-redux"
import {addBasket} from "../../actions/addActions"

const  Djellaba=(props)=> {
  const productAPI = "/api/categories/Djellaba";
  
  const [djellaba, setDjellaba] = useState([]);
  const getProductData = async () => {
    const response = await fetch(productAPI);
    const data = await response.json();
    setDjellaba(data);
  };
  useEffect(() => {
    getProductData();
  }, []);


  return (
    <>
      <h2>Djellaba</h2>
      <div className="cataloguecaftan">
      
        {djellaba &&
          djellaba.map((jal, i) => {
            
            return (
              <>
              <Link to={`/${jal['Products.id']}`} key={i}>
              <div className="caftan">
                <img className="imagecaftan" src={jal['Products.image']} />
                <div className="nom"> {jal['Products.nom']}</div>
                <div className="prix"> {jal['Products.prix']}</div>
              </div>
              </Link>
              {/* <button> Ajouter au Panier</button> */}
             <a onClick={()=>props.addBasket(jal['Products.nom'])} className="addToCart" href="#">Ajouter au Panier</a>
              </>
            );
          })}
      </div>
    </>
  );
}



//  const mapStateToProps=state=>({
//   basketProps:state.basketState
// })
export default connect(null,{addBasket})(Djellaba);
//export default Djellaba;
