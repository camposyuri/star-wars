import React, { useState, useEffect } from "react";
import TableDark from "../../components/TableDark";
import TableHeader from "../../components/TableDark/TableHeader";
import TableBody from "../../components/TableDark/TableBody";
import { Container } from "reactstrap";
import api from "../../services";

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    api.get("/api/planets").then(res => {
      setPlanets(res.data.results);
    });
  }, []);

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

      <pre>{JSON.stringify(planets)}</pre>
    </>
  );
};

export default Planets;
