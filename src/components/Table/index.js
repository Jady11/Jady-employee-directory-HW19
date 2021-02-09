import React from "react";
import TableBody from "../TableBody";
import "./style.css";
import { sortList } from "../../pages/Home"


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
            <button type="button" onClick={e => sortList(results.name)}>
              Employee Name 
            </button>
          </th>
          <th scope="col">
            <button type="button" onClick={() => sortList(results.dob)}>
              DOB 
            </button>
          </th>
          <th scope="col">
            <button type="button" onClick={() => sortList(results.email)}>
              Employee Email 
            </button>
          </th>
          <th scope="col">
            <button type="button" onClick={() => sortList(results.phone)}>
              Employee Phone 
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        { results.map((results) => (
          <TableBody results={ results }/>
          
        ))}
      </tbody>
    </table>
  );
}

export default Table;
