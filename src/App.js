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

  showSearchResult = (searchString) => {
    console.log(searchString);
    fetch(url + "&s=" + searchString)
      .then((response) => response.json())
      .then((responseObject) => {
        console.log(responseObject);
        if (responseObject.Response === "True") {
          this.setState({ searchedMovies: responseObject.Search });
        }
      });
  };

  render() {
    return (
      <Router>
        <Navbar showSearchResult={this.showSearchResult} />
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                exact={route.exact}
                render={(props) => {
                  return (
                    <route.layout {...props}>
                      <route.component
                        {...props}
                        searchedMovies={this.state.searchedMovies}
                      />
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
