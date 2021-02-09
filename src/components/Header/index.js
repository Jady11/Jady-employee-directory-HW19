import React from "react";
// import "./style.css"
// import Search from "../Search"

function Header(props) {
  return (
    <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
      <h1 className="display-4">Employee Directory</h1>
      </div>
      </div>
    
    <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>
    </div>
  );
}

export default Header;
