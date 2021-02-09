import React from "react";

function TableBody(props) {
  const { results } = props
  console.log(results)
  return (
    <tr key={ results.name }>
      <td>
        <img alt="picture" src={ results.picture.medium }/>
      </td>
      <td>
        { results.name.first } { results.name.last }
      </td>
      <td>
        { new Date(results.dob.date).toLocaleDateString() }
      </td>
      <td>
        { results.email }
      </td>
      <td>
        { results.phone }
      </td>
    </tr>
)
}

export default TableBody;
