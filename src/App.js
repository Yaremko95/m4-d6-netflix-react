import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";

import routes from "./route/routes";
import MoviePage from "./pages/MoviePage";
import Home from "./pages/Home";

const url = " http://www.omdbapi.com/?i=tt3896198&apikey=2d34948a";

class App extends Component {
  state = {
    searchedMovies: [],
  };

  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                exact={route.exact}
                render={(props) => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                }}
              />
            );
          })}
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}
export default App;
