import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/").then(res => {
      setData(res.data.results);
    });
  }, []);

  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default App;
