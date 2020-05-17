import React from 'react';
import About from "./about"
import Login from "./RegisterLogin";
import Register from "./RegisterLogin/register"

import {
  // eslint-disable-next-line
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </div>
  );
}

export default App;