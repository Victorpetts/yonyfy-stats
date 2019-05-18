import React from "react";

const ShowButton = props => (
  <div className="center">
    {!props.showAll
      ? <button className="showButton" onClick={() => props.toggleAll()}>Visa fler</button>
      : <button className="showButton" onClick={() => props.toggleAll()}>Visa färre</button>
    }
  </div>
);
export default ShowButton;
