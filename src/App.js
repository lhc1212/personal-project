import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Banner from "./Banner"

function App() {
  return (
    <div className="app">

      <Banner />

      <Router>
        <Switch>
          <Route path="/big-bang">

          </Route>
          <Route path="/religous">
            <App />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
