import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header"

function App() {
  return (
    <Router>
        <Wrapper>
          <Header/>
            <Route exact path="/" component={ Home }/>
        </Wrapper>
      </Router>
  );
}

export default App;
