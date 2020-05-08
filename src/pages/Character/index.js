import React, { useState, useEffect } from "react";
import TableDark from "../../components/TableDark";
import TableHeader from "../../components/TableDark/TableHeader/";
import TableBody from "../../components/TableDark/TableBody/";
import {
  Container,
  Spinner,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";
import api from "../../services";
import { MdSearch } from "react-icons/md";

const Character = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      api.get(`/api/people/?search=${searchTerm}`).then(res => {
        setData(res.data.results);
      });
      setIsLoaded(true);
    }, 1000);
  }, [searchTerm]);

  if (!isLoaded) {
    return (
      <Container className="my-5">
        <Row className="align-items-center justify-content-center">
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        </Row>
      </Container>
    );
  }
  return (
    <>
      <Container fluid>
        <Row className="py-3 align-items-center">
          <Col md="3">
            <h1>Characters</h1>
          </Col>
          <Col md="6">
            <InputGroup>
              <Input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search by name"
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <MdSearch />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </Container>
      <TableDark>
        <TableHeader
          name="Name"
          height="Height"
          mass="Mass"
          eyeColor="Eye color"
          birthYear="Birth Year"
        />
        {data.map(person => {
          return (
            <TableBody
              key={person.id}
              name={person.name}
              height={person.height}
              mass={person.mass}
              eyeColor={person.eye_color}
              birthYear={person.birth_year}
            />
          );
        })}
      </TableDark>
    </>
  );
};

export default Character;
