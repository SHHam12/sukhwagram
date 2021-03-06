import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import { Link } from "react-router-dom";

const PhotoComments = props => (
  <div className={styles.comments}>
    <ul className={styles.list}>
      <Comment username={props.creator} comment={props.caption} />
      {props.comments.map(comment => (
        <Comment
          username={comment.creator.username}
          comment={comment.message}
          key={comment.id}
        />
      ))}
    </ul>
  </div>
);

const Comment = props => (
  <li className={styles.comment}>
    <Link
      to={{ pathname: `/${props.username}` }}
      target="_self"
      style={{ textDecoration: "none", color: "black" }}
    >
      <span className={styles.username}>{props.username}</span>{" "}
    </Link>
    <span className={styles.message}>{props.comment}</span>
  </li>
);

PhotoComments.propTypes = {
  caption: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired
};

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
}

export default PhotoComments;
