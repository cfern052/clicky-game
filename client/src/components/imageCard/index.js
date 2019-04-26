import React from "react";
import "./style.css";

function imageCard(prop) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          src={prop.image}
        />
      </div>
    </div>
  );
}

export default imageCard;
