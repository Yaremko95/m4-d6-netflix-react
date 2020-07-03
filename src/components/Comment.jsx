import React, { Component } from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import TimeAgo from "react-timeago/lib";
import Button from "react-bootstrap/Button";

class Comment extends Component {
  constructor(props) {
    super(props);
  }
  handleDelete = async (id) => {
    try {
      let response = await fetch(
        `https://striveschool.herokuapp.com/api/comments/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa("user27:ZGDWyFCA8umbgpvZ"),
          },
        }
      );
      this.props.fetchComments && this.props.fetchComments();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { comment } = this.props;
    return (
      <div
        className={"d-flex flex-column"}
        style={{
          color: "whitesmoke",
        }}
      >
        <span>{comment.author}</span>
        <Rating
          initialRating={comment.rate}
          fullSymbol={<FaStar color={"orange"} />}
          emptySymbol={<FaRegStar color={"orange"} />}
        />
        <span>{comment.comment}</span>
        <div>
          <TimeAgo date={comment.createdAt} />
          <Button
            onClick={() => this.handleDelete(comment._id)}
            style={{
              backgroundColor: "transparent",
            }}
          >
            <i>Remove</i>
          </Button>
        </div>
      </div>
    );
  }
}

export default Comment;
