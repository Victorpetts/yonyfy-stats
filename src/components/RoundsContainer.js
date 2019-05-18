import React, { Component } from 'react';
import Table from "./Table";
import Dropdown from "./Dropdown";
import ButtonRow from "./ButtonRow";
import ShowButton from "./ShowButton";
import TableHead from "./TableHead";
import Loading from "./Loading";

const proxyUrl = 'https://nameless-sierra-18633.herokuapp.com/';

class RoundsContainer extends Component {

  state = {
    showAll: false,
    statsData: '',
    roundsData: '',
    headerTitle: '',
    activeButton: true,
    isLoading: true,
    leagueID: this.props.league,
    customer: this.props.customer
  };


  componentDidMount = () => {
    this.getLatestRound()
  }

  getRoundStats = async (number, id) => {
    this.setState({ isLoading: true });
    const roundNumb = id;
    const customer = this.state.customer

    try {
      const api_call = await fetch(proxyUrl + `https://api.yonyfy.com/api/fantasy/rounds/${roundNumb}/leaderboard/points`, {
        headers:{
          "Customer": customer
        }
      });
      const data = await api_call.json();
      // console.log(data);


      this.setState(() => {
        return {
          statsData: data,
          showComp: 'round',
          headerTitle: `Omgång ${number}`,
          isLoading: false
        };
      });
    } catch (error) {
    }
  }

  getLatestRound = async () => {
    const leagueID = this.state.leagueID;
    const customer = this.state.customer;

    try {
      const api_call = await fetch( proxyUrl + `https://api.yonyfy.com/api/fantasy/rounds/league/${leagueID}/season/2018/finished`, {
        headers:{
          "Customer": customer
        }
      });
      const data = await api_call.json();

      const api_call2 = await fetch( proxyUrl + `https://api.yonyfy.com/api/fantasy/rounds/${data[0].id}/leaderboard/points`, {
        headers:{
          "Customer": customer
        }
      });
      const data2 = await api_call2.json();

      // console.log(data);
      // console.log(data2);

      this.setState(() => {
        return {
          roundsData: data,
          statsData: data2,
          showComp: 'round',
          headerTitle: `Omgång ${data[0].number}`,
          isLoading: false
        };
      });
    } catch (error) {
    }
  }

  toggleAll = () => {
    this.setState(prevState => ({
      showAll: !prevState.showAll
    }))
  }

  render() {

    const { statsData, headerTitle, roundsData, showAll, isLoading } = this.state;

    return (
        <div className="mainCont">
          {isLoading
            ? <Loading hockey={this.props.hockey} />
            : <div>
              <div className="topCont">
                <ButtonRow />
                <Dropdown
                  getRoundStats={this.getRoundStats}
                  rounds={roundsData}
                  title={headerTitle}
                  hockey={this.props.hockey}
                />
              </div>
              {this.props.hockey
                ? <div className="tableHockey">
                  <TableHead hockey={this.props.hockey} />
                  <Table
                    statsData={statsData}
                    showAll={showAll}
                  />
                </div>
                : <div className="table">
                  <TableHead />
                  <Table
                    statsData={statsData}
                    showAll={showAll}
                  />
                </div>
              }
              <ShowButton
                toggleAll={this.toggleAll}
                showAll={showAll}
              />
            </div>
          }
        </div>
    )

  }
};

export default RoundsContainer;
