import React, { useState, useEffect } from "react";

const TableBody = props => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const arrAux = [];
    for (const prop in props) {
      arrAux.push(props[prop]);
      setProperties(arrAux);
    }
  }, [props]);

  return (
    <>
      <tbody>
        <tr>
          {properties.map((prop, index) => (
            <td key={index}>{prop}</td>
          ))}
        </tr>
      </tbody>
    </>
  );
};

export default TableBody;
