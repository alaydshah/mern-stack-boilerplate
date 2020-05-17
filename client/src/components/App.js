import React from 'react';
import About from "./about"

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
      </Switch>
    </div>
  );
}

export default App;