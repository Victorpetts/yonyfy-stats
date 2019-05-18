import React from "react";

const TableHead = props => (
  <div>
    {props.hockey
      ? <div className="statsHeadHockey">
        <p className="placeHead">Placering</p>
        <p>Användare</p>
        <div className="extraHead"></div>
        <p>Favoritlag</p>
        <p className="pointsHead">Poäng</p>
        <p className="moreStatsHead">Stats</p>
      </div>
      :<div className="statsHead">
        <p className="placeHead">Placering</p>
        <p>Användare</p>
        <div className="extraHead"></div>
        <p>Favoritlag</p>
        <p className="pointsHead">Poäng</p>
        <p className="moreStatsHead">Stats</p>
      </div>
    }
  </div>
);
export default TableHead;
