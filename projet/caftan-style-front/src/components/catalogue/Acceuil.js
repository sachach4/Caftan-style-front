import React from "react";
import { Slide } from 'react-slideshow-image';
import "./caftan.css";
import { Link } from "react-router-dom";

function Acceuil() {
const slideImages = [
  'assets/images.jpeg',
  'assets/images.jpeg',
  'assets/images.jpeg'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

  return(
    <>
  
  <div >
  <h2>Acceuil</h2>
  
  <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    
  {/* <img className="imagecaftan" src="/assets/images.jpeg"/> */}
  <div classeName="text">
  <p> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus amet accusantium, unde voluptatum ab quae assumenda asperiores sequi consequuntur! Rem quis assumenda debitis necessitatibus sapiente distinctio pariatur modi iste deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem minus voluptate maiores facere expedita, laboriosam fugit excepturi perspiciatis quas ex quis in omnis eaque ducimus consequuntur doloremque velit natus earum!
        Blanditiis ducimus, corporis amet ad reprehenderit, exercitationem suscipit optio illum similique libero, dolore distinctio cumque nobis tempora perferendis temporibus. Minima doloribus quos nam repudiandae totam libero ipsam incidunt voluptatem ullam!
        Quidem tenetur officia, consectetur beatae, fugiat omnis animi repellat quis blanditiis exercitationem corporis placeat, doloribus saepe provident explicabo natus adipisci libero. Obcaecati explicabo architecto error corporis dolore! Voluptatum, tempore autem.
        </p>
  </div>
  
  
        </div>
      
  
   
  </>
  
  ) 
}

export default Acceuil;