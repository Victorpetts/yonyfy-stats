import React, { Component } from 'react';
import UserStats from "./UserStats";
import moreIcon from '../img/moreIcon.png';
import profIcon from '../img/profIcon.png';
import firstPlace from '../img/firstPlace.png';
import secondPlace from '../img/secondPlace.png';
import thirdPlace from '../img/thirdPlace.png';
import empty from '../img/empty.png';

class User extends Component {

  state = {
    moreStats: false,
    showMedal: '',
    construction: true
  };

  componentDidMount = () => {
    this.props.place === 1 &&
      this.setState({ showMedal: 'first' })
    this.props.place === 2 &&
      this.setState({ showMedal: 'second' })
    this.props.place === 3 &&
      this.setState({ showMedal: 'third' })
  }

  showMoreStats = () => {
    this.setState(prevState => ({
      moreStats: !prevState.moreStats
    }))
  }

  render() {

    let place;

    switch(this.state.showMedal) {
      case 'first':
        place = <img className="placePic" src={firstPlace} alt='first place' width="38" height="38" />
      break
      case 'second':
        place = <img className="placePic" src={secondPlace} alt='second place' width="38" height="38" />
      break
      case 'third':
        place = <img className="placePic" src={thirdPlace} alt='third place' width="38" height="38" />
      break
      default:
        place = <p className="place">{this.props.place}</p>
      break
    }

    return (
      <div className="userBar">
        {!this.props.placements
          ?
          <div>
            <div
              className="user"
              onClick={ () => this.showMoreStats() }
            >
              {place}

              { this.props.profPic
                ? <img className="profPic" src={this.props.profPic} alt='users profile icon' height="50" />
                : <img className="profPic" src={profIcon} alt='standard profile icon' width="50" height="50" />
              }

              <p className="userName">{this.props.userName}</p>

              <div className="extra"></div>

              { this.props.favTeam
                ? <img className="favTeam" src={this.props.favTeam} alt='favorite team' height="50" />
                : <img className="favTeam" src={empty} alt='profile' height="50" />
              }

              <p className="points">{this.props.points}</p>

              <img className="moreIcon" src={moreIcon} alt='show more stats icon' width="30" height="30" />
            </div>

            <UserStats
              moreStats={this.state.moreStats}
              roundsPlayed={this.props.roundsPlayed}
              totalRounds={this.props.totalRounds}
              bestName={this.props.bestName}
              bestTeam={this.props.bestTeam}
              bestPoints={this.props.bestPoints}
              capName={this.props.capName}
              capTeam={this.props.capTeam}
              capPoints={this.props.capPoints}
             />
          </div>
          :
          <div>
            <div
              className="user"
              onClick={(e) => {
                this.showMoreStats(this.props.userName);
              }}
            >
              {place}

              { this.props.profPic
                ? <img className="profPic" src={this.props.profPic} alt='users profile icon' width="50" height="50" />
                : <img className="profPic" src={profIcon} alt='standard profile icon' width="50" height="50" />
              }

              <p className="userName">{this.props.userName}</p>

              <div className="extra"></div>

              <p className="placement">{this.props.firstPlace}</p>
              <p className="placement">{this.props.secondPlace}</p>
              <p className="placement">{this.props.thirdPlace}</p>

              <img className="moreIcon" src={moreIcon} alt='show more stats icon' width="30" height="30" />
            </div>

            <UserStats
              moreStats={this.state.moreStats}
              construction={this.state.construction}
             />
         </div>
        }
      </div>
    )
  }
};

export default User;
