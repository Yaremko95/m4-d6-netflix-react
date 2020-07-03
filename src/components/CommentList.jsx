import React, { Component } from "react";

import Comment from "./Comment";
import AddComment from "./AddComment";

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieID: this.props.movieId,
      comments: [],
    };
  }
  componentDidMount = async () => {
    this.fetchComments();
  };

  fetchComments = async () => {
    const commentsUrl = "https://striveschool.herokuapp.com/api/comments/";
    const comments = await fetch(commentsUrl + this.props.movieId, {
      headers: new Headers({
        Authorization: "Basic " + btoa("user27:ZGDWyFCA8umbgpvZ"),
      }),
    }).then((response) => response.json());
    this.setState({ comments: comments });
    console.log(comments);
  };

  componentWillUnmount = () => {
    console.log("bye bye");
  };

  updateState = (comment) => {
    this.setState({
      comments: [...this.state.comments, comment],
    });
  };
  render() {
    // if (this.props.callFetch) {
    //   this.fetchComments();
    // }
    const { comments } = this.state;
    return (
      <>
        {comments.map((comment) => (
          <Comment
            comment={comment}
            setState={this.setState}
            fetchComments={this.fetchComments}
          />
        ))}

        <AddComment
          movieId={this.state.movieID}
          setState={this.updateState}
          fetchComments={this.fetchComments}
        />
      </>
    );
  }
}

export default CommentList;
