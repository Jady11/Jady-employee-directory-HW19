import React from "react";

function TableBody(props) {
  return <div className={ `container${ props.fluid ? "-fluid": ""}`}>{ props.children }</div>;
  
}


export default TableBody;
