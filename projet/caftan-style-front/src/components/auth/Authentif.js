import React from 'react';
import "./auth.css";

function Authentif(  ) {

  return (
<>  
<div> 
     <form>
        <h1>Connexion</h1>
          <label>Civilité</label><br/>
<input type="radio" name="civilite" value="M." checked="checked"/> M.
<input type="radio" name="civilite" value="Mme"/> Mme
<input type="radio" name="civilite" value="Melle"/> Melle <br/>
        <label><b>E mail</b></label>
        <input type="text" placeholder="Entrer un e mail" name="Email" />
        <label><b>Nom</b></label>
        <input type="text" placeholder="Entrer votre nom" name="Nom" />
        <label><b>Prenom</b></label>
        <input type="text" placeholder="Entrer un prenom" name="Prenom" />
        <label><b>Adresse</b></label>
        <input type="text" placeholder="Entrer un adresse" name="Adresse" />
         <label><b>Mot de passe</b></label>
        <input type="password" placeholder="Entrer le mot de passe" name="password" />
        <input type="submit" id='submit' value='LOGIN'/>
   
       
    </form> 
</div>

  </>
  )
};
export default Authentif;
 