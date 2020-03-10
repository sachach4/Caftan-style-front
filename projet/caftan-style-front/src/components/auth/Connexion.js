import React, { useEffect, useState } from "react";
//import "./auth.css";
import {firebase,fireAuth  } from "../../firebase/FireBase";
import withFirebaseAuth from "react-with-firebase-auth";
//import {connect} from "react-redux";
//import * as firebase from "firebase/app";
//import Authentif from "./Authentif"
import axios from "axios";
import "./auth.css";
//import checkToken from "../../actions/userActions"
import { Link } from "react-router-dom";
const firebaseAppAuth = fireAuth;
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

const Connexion= props => {
  const {user,signInWithGoogle,signOut}=props;

  async function callApi() {
    await axios.get("http://localhost:8000/api/auth");
  }
  React.useEffect(() => {
    if (user) {
      user
        .getIdToken()
        .then(idToken => {
          console.log("idToken", idToken);
          axios.defaults.headers.common["Authorization"] = idToken;
        })
        .catch(err => console.log(err));
    }
    props.checkToken()
  }, [user]);

  return (
   
      <div className="container">
        <header className="App-header">
       
          {user ? <p>Bonjour, {user.displayName}</p> : <p>Connexion</p>}
  
          {user ? (
            <>
              <button onClick={signOut}>Déconnexion</button>
              <button onClick={() => callApi(user)}>ping Serveur</button>
            </>
          ) : (
            <>
             
       <label><b>E mail</b></label>
       <input type="text" placeholder="Entrer un e mail" name="Email" />
       <label><b>Mot de passe</b></label>
       <input type="password" placeholder="Entrer le mot de passe" name="password" />
       <button>Connexion</button><br/>
       <label>------Ou--------</label><br/>
            <button onClick={signInWithGoogle}>Se login avec Google</button>
            <br/>
 <label>Vous n'avez pas de compte ?</label>
 <Link to ="/Authentif" >Inscrivez-vous</Link>
            </>
          )}
        </header>
      </div>
      
    );
          }
    export default withFirebaseAuth({providers,firebaseAppAuth})(Connexion);
//     <form>
      
//   <div className="container">
 
//  {user ? <p>Bonjour, {user.displayName}</p> : <h2>Connexion</h2>}

//  {user ? (
//  <>
//   <button onClick={signOut}>Déconnexion</button>
//   <button onClick={() => callApi(user)}>ping Serveur</button>
//    </>
//    ) : ( 
//   //  <>
//   //       <label><b>E mail</b></label>
//   //       <input type="text" placeholder="Entrer un e mail" name="Email" />
//   //       <label><b>Mot de passe</b></label>
//   //       <input type="password" placeholder="Entrer le mot de passe" name="password" />
//   //       <button>Connexion</button><br/>
//   //       <label>------Ou--------</label><br/>
//         <button onClick={signInWithGoogle}>Se connecter avec Google</button>
//         //  <br/>
//         // <label>Vous n'avez pas de compte ?</label>
//         // <Link to ="/Authentif" >Inscrivez-vous</Link>

//         // </>
//     )}
// </div>
//     </form>
    

  
  



