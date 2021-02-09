import React, { Component } from "react";
import TableBody from "../components/TableBody";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";
import Search from "../components/Search";
import Table from "../components/Table";
import API from "../utils/API";


class Home extends Component {
  state = {
    results: [],
    search: ""
  };

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
      <div>
        <TableBody>
          <Header>
            <Wrapper size="sm-12">
              <div heading="Search">
                <Search
                value={ this.state.search }
                handleInputChange={ this.handleInputChange }
                handleFormSubmit={ this.handleFormSubmit }
                />
              </div>
              <Card>
                { this.state.result.size != 0 ?
                (this.state.result.filter(person =>
                  person.name.first.includes(this.state.search) ||
                  person.name.last.includes(this.state.search) ||
                  person.phone.includes(this.state.search)
                  )
                  .map(x =>
                    <Table
                    key={ x.login.uuid }
                    name={ x.name }
                    phone={ x.phone }
                    dob={ x.dob }
                    picture={ x.picture.thumbnail }/>
                    )
                    ) : (
                      <ul className="list-group list-group-primary-sm">
                        No Results
                      </ul>
                    )}
              </Card>
            </Wrapper>
          </Header>
          </TableBody> 
      </div>
      
    );
  }
}

export default Home;
