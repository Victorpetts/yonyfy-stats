import React, { Component } from 'react';
import { Route, Redirect, HashRouter as Router} from "react-router-dom";
import './App.css';
import HockeyContainer from "./components/HockeyContainer";
import HandbollContainer from "./components/HandbollContainer";
import SheContainer from "./components/SheContainer";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Redirect to="/handbollsligan/omgang" /> }/>

          <Route path="/hockeyallsvenskan" render={(props) => <HockeyContainer {...props}/>} />
          <Route path="/handbollsligan" render={(props) => <HandbollContainer {...props}/>} />
          <Route path="/she" render={(props) => <SheContainer {...props}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
