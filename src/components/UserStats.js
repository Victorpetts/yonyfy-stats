import React from "react";
import firstPlace from '../img/firstPlace.png';
import secondPlace from '../img/secondPlace.png';
import thirdPlace from '../img/thirdPlace.png';

const UserStats = props => (
  <div>
    { props.moreStats && props.totalRounds &&
      <div className="moreStatsBar">

        <div className="statsSection">
          <div className="moreStatsSeason">
            <p className="statsHeader">Spelade omgångar</p>
            <p>{props.roundsPlayed} av {props.totalRounds}</p>
          </div>
          <div className="moreStatsSeason">
            <p className="statsHeader">Flest poäng</p>
            <p>Kommer snart!</p>
          </div>
          <div className="moreStatsSeason">
            <p className="statsHeader">Bästa spelare</p>
            <p>Kommer snart!</p>
          </div>
        </div>

        <div className="moreStatsBar">
          <div className="statsPlacementsSection">
            <img className="placePicStats" src={firstPlace} alt='first place' width="30" height="30" />
            <img className="placePicStats" src={secondPlace} alt='first place' width="30" height="30" />
            <img className="placePicStats" src={thirdPlace} alt='first place' width="30" height="30" />
            <p className="placementNumber">Snart kan du se alla dina placeringar här!</p>
          </div>
        </div>

      </div>
    }

    { props.moreStats && props.bestName &&
      <div className="moreStatsBar">
        <div className="statsSection">
          <div className="moreStatsRound">
            <p className="statsHeader">Bästa spelare</p>
            <p>{props.bestName}</p>
            <p>{props.bestTeam}</p>
            <p className="statsPoints">{props.bestPoints} poäng</p>
          </div>
          <div className="moreStatsRound">
            <p className="statsHeader">Lagkapten</p>
            <p>{props.capName}</p>
            <p>{props.capTeam}</p>
            <p className="statsPoints">{props.capPoints} poäng</p>
          </div>
        </div>
      </div>
    }

  </div>
);

export default UserStats;
