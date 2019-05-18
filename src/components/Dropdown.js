import React, { Component } from 'react';
import onClickOutside from "react-onclickoutside";

const FontAwesome = require('react-fontawesome');

class Dropdown extends Component {

  state = {
    listOpen: false,
    headerTitle: this.props.title
  };


  handleClickOutside() {
    this.setState({
      listOpen: false
    })
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render() {

    const{rounds, hockey} = this.props
    const{listOpen, headerTitle} = this.state

    return(
      <div className="titleAndDd">
        <div className="roundTitle">Topplista - {headerTitle}</div>
        {rounds && !hockey &&
          <div className="ddWrapper">
            <div className="ddHeader" onClick={() => this.toggleList()}>
                <div className="ddHeaderTitle">{headerTitle}</div>
                {listOpen
                  ? <FontAwesome name="angle-up" size="2x"/>
                  : <FontAwesome name="angle-down" size="2x"/>
                }
            </div>
            {listOpen &&
              <ul className="ddList">
                {rounds.map((item) => (
                 <li className="ddListItem" key={item.id} onClick={() =>
                   this.props.getRoundStats(item.number, item.id)}>
                   Omgång {item.number}
                 </li>
                 ))}
              </ul>
            }
          </div>
        }
        {rounds && hockey &&
          <div className="ddWrapper">
            <div className="ddHeaderHockey" onClick={() => this.toggleList()}>
                <div className="ddHeaderTitle">{headerTitle}</div>
                {listOpen
                  ? <FontAwesome name="angle-up" size="2x"/>
                  : <FontAwesome name="angle-down" size="2x"/>
                }
            </div>
            {listOpen &&
              <ul className="ddList">
                {rounds.map((item) => (
                 <li className="ddListItemHockey" key={item.id} onClick={() =>
                   this.props.getRoundStats(item.number, item.id)}>
                   Omgång {item.number}
                 </li>
                 ))}
              </ul>
            }
          </div>
        }
      </div>
    )
  }

};

export default onClickOutside(Dropdown);
