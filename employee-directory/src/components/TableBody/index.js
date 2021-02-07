import React from "react";

function TableBody(props) {
  const { result, index } = props
  console.log(result)
  return (
    <tr key={ index }>
      <td>
        <img alt="thumbnail" src={ result.thumbnail.large }/>
      </td>
      <td>
        { result.name.first } { result.name.last }
      </td>
      <td>
        { new Date(result.dob.date).toLocaleDateString() }
      </td>
      <td>
        { result.email }
      </td>
      <td>
        { result.phone }
      </td>
    </tr>
)
}

export default TableBody;
