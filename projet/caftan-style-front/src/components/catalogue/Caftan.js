//import React from "react";
import React, { useEffect, useState } from "react";
import "./caftan.css";
function Caftan() {
  const productAPI = "/api/categories/Caftan";
  const [caftan, setCaftan] = useState([]);
  const getProductData = async () => {
    const response = await fetch(productAPI);
    const data = await response.json();
    setCaftan(data);
    console.log('afficher api',data)
    
    return caftan;
  };
  useEffect(() => {
    getProductData();
    }, []);



return(
  <>
<h2>Caftan</h2>
<div className="cataloguecaftan">
  { caftan && caftan.map ((caf,i)=>{
    return(
      <div className='caftan'>
<img className="imagecaftan" src={caf.image}/>
<div className="nom">  {caf.nom}</div>
<div className="prix">  {caf.prix}</div>
      </div>
    )

  })

  }
  
</div>
</>

) 
}
export default Caftan;
