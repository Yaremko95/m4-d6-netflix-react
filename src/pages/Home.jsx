import React, { Component } from "react";
import { Container, Dropdown, Alert } from "react-bootstrap";
import Gallery from "../components/Gallery";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      harryPotterMovies: [],
      spiderManMovies: [],
      starWarsMovies: [],
      searchedMovies: [],
      loading: true,
      error: false,
      comments: [],
    };
    console.log(props);
    this.url = "https://strive-netflix-api.herokuapp.com/media/search?s=Harry";
  }
  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.showSearchResult(this.props.query);
    }
  }

  showSearchResult = (searchString) => {
    fetch(this.url + "&s=" + searchString)
      .then((response) => response.json())
      .then((responseObject) => {
        console.log(responseObject);
        if (responseObject.Response === "True") {
          this.setState({ searchedMovies: responseObject.Search });
        }
      });
  };

  componentDidMount = () => {
    if (this.props.query.length > 0) {
      this.showSearchResult(this.props.query);
    }
    Promise.all([
      fetch(this.url )
        .then((response) => response.json())
        .then((responseObject) => {
          console.log("object", responseObject);
          this.setState({ harryPotterMovies: responseObject.Search });

        }),
      // fetch(this.url + "s=spider")
      //   .then((response) => response.json())
      //   .then((responseObject) =>
      //     this.setState({ spiderManMovies: responseObject })
      //   ),
      // fetch(this.url + "s=star")
      //   .then((response) => response.json())
      //   .then((responseObject) =>
      //     this.setState({ starWarsMovies: responseObject })
      //   ),
    ])
      .then(() => this.setState({ loading: false }))
      .catch((err) => {
        this.setState({ error: true });
        console.log("An error has occurred:", err);
      });
  };

  render() {
    return (
      <div className="App">
        <div>
          <Container fluid className="px-4">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <h2 className="mb-4">TV Shows</h2>
                <div className="ml-4 mt-1">
                  <Dropdown>
                    <Dropdown.Toggle
                      style={{ backgroundColor: "#221f1f" }}
                      id="dropdownMenuButton"
                      className="btn-secondary btn-sm dropdown-toggle rounded-0"
                    >
                      Genres
                    </Dropdown.Toggle>
                    <Dropdown.Menu bg="dark">
                      <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div>
                <i className="fa fa-th-large icons"></i>
                <i className="fa fa-th icons"></i>
              </div>
            </div>
            {this.state.error && (
              <Alert variant="danger" className="text-center">
                An error has occurred, please try again later
              </Alert>
            )}
            {this.state.searchedMovies.length > 0 && (
              <Gallery
                title="Search results"
                movies={this.state.searchedMovies}
              />
            )}
            {!this.state.error && !this.state.searchedMovies.length > 0 && (
              <>
                <Gallery
                  title="Harry Potter"
                  loading={this.state.loading}
                  movies={this.state.harryPotterMovies}
                />
                <Gallery
                  title="Spider Man"
                  loading={this.state.loading}
                  movies={this.state.spiderManMovies.slice(0, 6)}
                />
                <Gallery
                  title="Star Wars"
                  loading={this.state.loading}
                  movies={this.state.starWarsMovies.slice(0, 6)}
                />
              </>
            )}
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
