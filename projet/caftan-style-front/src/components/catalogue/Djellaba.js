
//import React from "react";
import React, { useEffect, useState } from "react";
import "./caftan.css";
function Djellaba() {
  const productAPI = "/api/categories/Djellaba";
  const [djellaba, setDjellaba] = useState([]);
  const getProductData = async () => {
    const response = await fetch(productAPI);
    const data = await response.json();
    setDjellaba(data);
    console.log('hhhhhhhhhhhhhhh',data)
    
    return djellaba;
  };
  useEffect(() => {
    getProductData();
    }, []);



return(
  <>
<h2>Djellaba</h2>
<div className="cataloguecaftan">
  { djellaba && djellaba.map ((jal,i)=>{
    return(
      <div className='caftan'>
<img className="imagecaftan" src={jal.image}/>
<div className="nom">  {jal.nom}</div>
<div className="prix">  {jal.prix}</div>
      </div>
    )

  })

  }
  
</div>
</>

) 
}
export default Djellaba;
