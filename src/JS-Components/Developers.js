import React from "react";
import Developer_Card from "./Developer_Card";
import '../CSS-Components/Developers.css';

function Developers() {
  
  return (
    <div className="developers" id="developers">
      <div className="dev_head">Developers</div>
      <div className="dev_cards">
        <Developer_Card />
        <Developer_Card />
        <Developer_Card />
      </div>
    </div>  
  )
}

export default Developers;
