import React, { useState, useEffect } from "react";
import TableDark from "../../components/TableDark";
import TableHeader from "../../components/TableDark/TableHeader";
import TableBody from "../../components/TableDark/TableBody";
import { Container, Row, Spinner } from "reactstrap";
import api from "../../services";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      api.get("/api/planets").then(res => {
        setPlanets(res.data.results);
      });
      setIsLoaded(true);
    }, 1000);
  }, []);

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
        <h1>Planets</h1>
      </Container>
      <TableDark>
        <TableHeader
          name="Name"
          rotation_period="Rotation period"
          orbital_period="Orbital period"
          diameter="Diameter"
          climate="Climate"
          gravity="Gravity"
          terrain="Terrain"
          surface_water="Surface water"
          population="Population"
        />
        {planets.map(planet => {
          return (
            <TableBody
              key={planet.id}
              name={planet.name}
              rotation_period={planet.rotation_period}
              orbital_period={planet.orbital_period}
              diameter={planet.diameter}
              climate={planet.climate}
              gravity={planet.gravity}
              terrain={planet.terrain}
              surface_water={planet.surface_water}
              population={planet.population}
            />
          );
        })}
      </TableDark>
    </>
  );
};

export default Planets;
