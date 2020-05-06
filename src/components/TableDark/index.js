import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import api from "../../services";

const TableDark = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/api/people/").then(res => {
      setData(res.data.results);
    });
  }, []);

  return (
    <>
      <Table responsive dark hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Eye color</th>
            <th>Birth Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(person => {
            return (
              <tr>
                <td>{person.name}</td>
                <td>{person.height}</td>
                <td>{person.mass}</td>
                <td>{person.eye_color}</td>
                <td>{person.birth_year}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to="/new-character">
                    New
                  </Link>
                  <Button color="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default TableDark;
