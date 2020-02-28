//import React from "react";
import React, { useEffect, useState } from "react";
import "./caftan.css";
function Babouche() {
  const productAPI = "/api/categories/Babouche";
  const [babouche, setBabouche] = useState([]);
  const getProductData = async () => {
    const response = await fetch(productAPI);
    const data = await response.json();
    setBabouche(data);
    console.log('hhhhhhhhhhhhhhh',data)
    
    return babouche;
  };
  useEffect(() => {
    getProductData();
    }, []);



return(
  <>
<h2>Caftan</h2>
<div className="cataloguecaftan">
  { babouche && babouche.map ((bab,i)=>{
    return(
      <div className='caftan'>
<img className="imagecaftan" src={bab.image}/>
<div className="nom">  {bab.nom}</div>
<div className="prix">  {bab.prix}</div>
      </div>
    )

  })

  }
  
</div>
</>

) 
}
export default Babouche;
