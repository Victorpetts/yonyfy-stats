import React, { Component } from 'react';
import { Route, Redirect, Switch, HashRouter as Router, NavLink} from "react-router-dom";
import MissingPage from "./MissingPage";
import SeasonContainer from "./SeasonContainer";
import RoundsContainer from "./RoundsContainer";
import SheLogo from '../img/newSheLogo.png';


class HockeyContainer extends Component {

  render() {
    return (
      <Router>
          <div>

            <img className="newLogo" src={SheLogo} alt='first place' height="120" />

            <ul className="header">
              <li><NavLink to={`${this.props.match.url}/omgang`}>Omgång</NavLink></li>
              <li><NavLink to={`${this.props.match.url}/sasong`}>Säsong</NavLink></li>
            </ul>

            <Route path={`${this.props.match.path}`} render={() => <Redirect to={`${this.props.match.path}/omgang`} /> }/>

            <Switch>
              <Route path={`${this.props.match.path}/omgang`} render={(props) => <RoundsContainer {...props} league={28} customer={"handbollsligan"}/>} />
              <Route path={`${this.props.match.path}/sasong`} render={(props) => <SeasonContainer {...props} league={28} customer={"handbollsligan"}/>} />
              <Route component={ MissingPage } />
            </Switch>

          </div>
      </Router>
    )
  }
};

export default HockeyContainer;
