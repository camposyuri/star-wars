import React, { useState, useEffect } from "react";

const TableHeader = props => {
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
      <thead>
        <tr>
          {properties.map((prop, index) => (
            <th key={index}>{prop}</th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
