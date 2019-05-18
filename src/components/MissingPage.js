import React from "react";

const MissingPage = props => (
  <div className="mainCont">
    {props.hockey
      ? <h4 className="loadingHockey">404 sidan du söker finns inte</h4>
      : <h4 className="loading">404 sidan du söker finns inte</h4>}
  </div>
);
export default MissingPage;
