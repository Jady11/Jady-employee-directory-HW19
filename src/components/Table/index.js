import React from "react";
import TableBody from "../TableBody";
import "./style.css"

function Table(props) {
  const { results } = props
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">
            Photo
          </th>
          <th scope="col">
            <button type="button">
              Employee Name 
            </button>
          </th>
          <th scope="col">
            <button type="button">
              DOB 
            </button>
          </th>
          <th scope="col">
            <button type="button">
              Employee Email 
            </button>
          </th>
          <th scope="col">
            <button type="button">
              Employee Phone 
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        { results?.map((result, index) => (
          <TableBody results={ result } index={ index }/>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
