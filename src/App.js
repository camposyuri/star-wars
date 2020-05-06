import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Character from "./pages/Character";
import NewCharacter from "./pages/NewCharacter";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/character" component={Character} />
          <Route path="/new-character" component={NewCharacter} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
