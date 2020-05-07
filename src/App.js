import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Character from "./pages/Character";
import Planets from "./pages/Planets";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/character" component={Character} />
          <Route path="/planets" component={Planets} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
