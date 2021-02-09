import React from "react";
// import TableBody from "../TableBody";
// import "./style.css";
// import { sortList } from "../../pages/Home"


function Table(props) {
  const { results } = props
  return (
    <div className="text-center">
      <ul className="list-group list-group-flush list-group-horizontal-sm">
        <li className="list-group-item"><img alt={ props.name } 
        className="img-fluid" src={ props.picture } 
        style={{ margin: "0 auto" }} /></li>
        <li className="list-group-item"> { props.name.first } { props.name.last }</li>
        <li className="list-group-item"> { props.phone }</li>
        <li className="list-group-item"> { props.email }</li>
      </ul>
    </div>
  );
}

export default Table;
