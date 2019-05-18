import React from "react";
import User from "./User";

const Table = props => (
  <div className="userList">
    {!props.showAll
      ? props.statsData.slice(0, 25).map(item =>
        <User
          key={item.userName}
          place={item.place}
          profPic={item.profileImageLink}
          userName={item.userName}
          favTeam={item.favoriteTeamImageLink}
          points={item.points}
          capName={item.captainName}
          capTeam={item.captainTeam}
          capPoints={item.captainPoints}
          bestName={item.bestPlayerName}
          bestTeam={item.bestPlayerTeam}
          bestPoints={item.bestPlayerPoints}
          roundsPlayed={item.roundParticipationCount}
          totalRounds={props.rounds}
          firstPlace={item.firstPlacements}
          secondPlace={item.secondPlacements}
          thirdPlace={item.thirdPlacements}
        />
      )
      : props.statsData.slice(0, 100).map(item =>
        <User
          key={item.userName}
          place={item.place}
          profPic={item.profileImageLink}
          userName={item.userName}
          favTeam={item.favoriteTeamImageLink}
          points={item.points}
          capName={item.captainName}
          capTeam={item.captainTeam}
          capPoints={item.captainPoints}
          bestName={item.bestPlayerName}
          bestTeam={item.bestPlayerTeam}
          bestPoints={item.bestPlayerPoints}
          roundsPlayed={item.roundParticipationCount}
          totalRounds={props.rounds}
          firstPlace={item.firstPlacements}
          secondPlace={item.secondPlacements}
          thirdPlace={item.thirdPlacements}
        />
      )
    }
  </div>
);
export default Table;
