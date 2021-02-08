import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/Table"

class Home extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    API.getRandomEmployee()
      .then(res => {
        this.setState({ results: res.data.results })
        console.log(res.data.results)
      })
  }

  render() {
    return (
      <div className container>
        { this.state.results.length > 0 ? 
      <Table results={ this.state.results }/> : "" }

      </div>
      
    )
  }
}

export default Home;
