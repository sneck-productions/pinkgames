/*import React from "react";


class App extends React.component {
render() {
 return <div>Hello world!</div>;
}
}

//export default App;*/

import React from "react";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import Memory from "./memory";
import Minesweeper from "./minesweeper";
import Snake from "./snake";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/memory" component={Memory}></Route>
        <Route path="/snake" component={Snake}></Route>
        <Route path="/minesweeper" component={Minesweeper}></Route>
      </Switch>
    </Router>
  );
}

export default App;
