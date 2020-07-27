import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from "./components/Nav/index"
import Jumbotron from "./components/Jumbotron/index"
import Search from "./pages/Search"
import Saved from "./pages/Saved"

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
       <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
