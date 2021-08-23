import React from "react";
import { Link } from "@reach/router";
import axios from "axios";
const AuthorList = (props) => {
  const { removeFromDom } = props;
  const deleteAuthor = (authorId) => {
    axios
      .delete("http://localhost:8000/api/authors/" + authorId)
      .then((res) => {
        removeFromDom(authorId);
      });
  };
  return (
    <div>
      {props.authors.map((author, idx) => {
        return (
          <p key={idx}>
            <Link to={"/authors/" + author._id}>{author.name}</Link>

            <Link to={"/authors/" + author._id + "/edit"}>Edit</Link>

            <button
              onClick={(e) => {
                deleteAuthor(author._id);
              }}
            >
              Delete
            </button>
          </p>
        );
      })}
    </div>
  );
};
export default AuthorList;
