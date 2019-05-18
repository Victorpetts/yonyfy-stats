import React, { Component } from 'react';
import Table from "./Table";
import Dropdown from "./Dropdown";
import ButtonRow from "./ButtonRow";
import ShowButton from "./ShowButton";
import TableHead from "./TableHead";
import Loading from "./Loading";

const proxyUrl = 'https://nameless-sierra-18633.herokuapp.com/';

class SeasonContainer extends Component {

  state = {
    showAll: false,
    statsData: '',
    headerTitle: '',
    activeButton: true,
    isLoading: true,
    leagueID: this.props.league,
    customer: this.props.customer,
  };


  componentDidMount = () => {
    this.getSeasonStats()
  }

  getSeasonStats = async () => {
    const seasonNumb = 2018;
    const customer = this.state.customer;
    const leagueID = this.state.leagueID;

    try {
      const api_call = await fetch(proxyUrl + `https://api.yonyfy.com/api/fantasy/league/${leagueID}/season/${seasonNumb}/leaderboard/points`, {
        headers:{
          "Customer": customer
        }
      });
      const data = await api_call.json();
      // console.log(data);

      const api_call2 = await fetch( proxyUrl + `https://api.yonyfy.com/api/fantasy/rounds/league/${leagueID}/season/2018/finished`, {
        headers:{
          "Customer": customer
        }
      });
      const data2 = await api_call2.json();
      // console.log(data2)

      const api_call3 = await fetch(proxyUrl + `https://api.yonyfy.se/api/fantasy/league/${leagueID}/season/2018/leaderboard/placements`, {
        headers:{
          "Customer": customer
        }
      });
      const data3 = await api_call3.json();
      // console.log(data3);

      this.setState(() => {
        return {
          statsData: data,
          roundsData: data2.length,
          placementsData: data3,
          headerTitle: `Säsong 18/19`,
          activeButton: true,
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

    const { statsData, headerTitle, showAll, isLoading, roundsData } = this.state;

    return (
      <div className="mainCont">
        {isLoading
          ? <Loading hockey={this.props.hockey} />
          : <div>
            <div className="topCont">
              <ButtonRow />
              <Dropdown
                title={headerTitle}
              />
            </div>
            {this.props.hockey
              ? <div className="tableHockey">
                <TableHead hockey={this.props.hockey} />
                <Table
                  statsData={statsData}
                  showAll={showAll}
                  rounds={roundsData}
                />
              </div>
              : <div className="table">
                <TableHead />
                <Table
                  statsData={statsData}
                  showAll={showAll}
                  rounds={roundsData}
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

export default SeasonContainer;
