import React, { useState } from "react";
import { useParams } from "react-router-dom";

// eslint-disable-next-line no-undef
//const apiBaseURL = process.env.Rea

const initialState = {
  id:"",
  nom: "",

Products:[
 {
  id:"",
  nom: "",
  prix:"",
  taille:"",
  image:"",
  stock:""
}
]

};

const Produit = () => {
  const [detailProduit, setDetailProduit] = useState(initialState);
  const { id } = useParams();
  console.log(id);
  const getProduit = catid => {
    fetch(`/api/categories/detail/${catid}`)
      .then(reponse => {
        return reponse.json();
      })
      .then(data => {
        console.log("détail produit", data);

        setDetailProduit(data);
      })
      .catch(error => {
        console.log("vous avez une erreur : ", error);
      });
  };

  React.useEffect(() => {
    getProduit(id);
  }, [id]);
  console.log("image",detailProduit.Products[0].image)
  return (
    <>
      <h3>{detailProduit.Products[0].nom}</h3>


      <img className="imagecaftan" src={detailProduit.Products[0].image} />

      

      <div className="detail">Prix:{detailProduit.Products[0].prix}</div>
    </>
  );
};

export default Produit;
