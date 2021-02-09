import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/Table"

class Home extends Component {
  state = {
    results: [],
    search: ""
  };

  // const sortList = results.name => {
  // };

  componentDidMount() {
    API.search("")
      .then(res => {
        console.log("mounting", res.data.results);
        this.setState({ results: res.data.results })
        // console.log(res.data.results)
      })
      .catch(err => console.log(err));
  }

  searchEmployee = query => {
    return this.state.results.filter(person => person.name.first.includes(query) 
    || person.name.includes(query)
    || person.phone.includes(query))
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value 
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.render();
  };

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
