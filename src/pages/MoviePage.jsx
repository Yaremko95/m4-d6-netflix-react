import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import CommentList from "../components/CommentList";
import Gallery from "../components/Gallery";
import { Router, Redirect } from "react-router-dom";

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},

      redirect: false,
    };
  }
  componentWillMount = async () => {
    const { movieId } = this.props.match.params;
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=ac60feab&i=${movieId}`
    );
    let movie = await response.json();
    this.setState({
      movie: movie,
    });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.setState({ redirect: true });
      console.log(this.props.query);
    }
  }

  render() {
    const { movie } = this.state;
    const { movieId } = this.props.match.params;
    console.log(movie.imdbID, "id");
    return (
      <>
        {this.state.redirect && <Redirect push to="/" />}

        <Container className="mt-4">
          <Row>
            <Col lg={4}>
              <Image
                src={movie.Poster}
                thumbnail
                style={{ height: "35rem", objectFit: "cover" }}
              />
            </Col>
            <Col lg={8}>
              <span
                style={{
                  color: "whitesmoke",
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                {movie.Title}
              </span>
              <div className="mt-2">
                <span
                  style={{
                    color: "#46d369",
                    fontSize: "1.2rem",
                    marginRight: "20px",
                  }}
                >
                  {movie.Released}
                </span>
                <span
                  style={{
                    color: "#e5e5e5",
                    fontSize: "1.2rem",
                  }}
                >
                  {movie.Runtime}
                </span>
              </div>
              <span
                className="my-3"
                style={{ color: "#999", fontSize: "1.5rem" }}
              >
                {movie.Plot}
              </span>
              <div>
                <Rating
                  start={2}
                  stop={10}
                  initialRating={movie.imdbRating}
                  fullSymbol={
                    <FaStar color={"orange"} style={{ fontSize: "1.5rem" }} />
                  }
                  emptySymbol={
                    <FaRegStar
                      color={"orange"}
                      style={{ fontSize: "1.5rem" }}
                    />
                  }
                />
              </div>
            </Col>
          </Row>
          <CommentList movieId={movieId} />
        </Container>
      </>
    );
  }
}

export default MoviePage;
