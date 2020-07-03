import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "",
      elementId: this.props.movieId,
    },
  };

  submitComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        " https://striveschool.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa("user27:ZGDWyFCA8umbgpvZ"),
          },
        }
      );
      if (response.ok) {
        const { comment } = this.state;
        this.props.setState(comment);
        //this.props.fetchReviews && this.props.fetchReviews()
        this.setState({
          comment: {
            comment: "",
            rate: "",
            elementId: this.props.movieId,
          },
        });
      } else {
        let json = await response.json();
        alert(json);
      }
    } catch (e) {
      console.log(e);
    }
  };

  updateComment = (event) => {
    let comment = this.state.comment;
    let currentId = event.currentTarget.id;
    currentId == "rate"
      ? (comment[currentId] = parseInt(event.currentTarget.value))
      : (comment[currentId] = event.currentTarget.value);
    this.setState({ comment: comment });
  };
  render() {
    return (
      <Form onSubmit={this.submitComment}>
        <Form.Group>
          <Form.Label>Add comment</Form.Label>
          <Form.Control
            name="comment"
            id="comment"
            as="textarea"
            rows="3"
            value={this.state.comment.comment}
            onChange={this.updateComment}
          />
        </Form.Group>

        <Form.Group controlId="rate">
          <Form.Label>Rate</Form.Label>
          <Form.Control
            name="rate"
            id="rate"
            type="number"
            value={this.state.comment.rate}
            onChange={this.updateComment}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    );
  }
}

export default AddComment;
