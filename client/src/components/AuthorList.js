import React from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import DeleteButton from "./DeleteButton";
const AuthorList = (props) => {
  const { removeFromDom } = props;
  const deleteAuthor = (authorId) => {
    axios
      .delete("http://localhost:8000/api/authors/" + authorId)
      .then((res) => {
        removeFromDom(authorId);
      });
  };

  const handleEdit = (e, author) => {
    navigate("/edit/" + author._id);
  };
  return (
    <div>
      {props.authors.map((author, idx) => {
        return (
          <p key={idx}>
            <Link to={"/authors/" + author._id}>{author.name}</Link>

            <Link to={"/authors/" + author._id + "/edit"}>
              <button onClick={(e) => handleEdit(e, author)}>Edit</button>
            </Link>

            <DeleteButton
              authorId={author._id}
              successCallback={() => removeFromDom(author._id)}
            />
          </p>
        );
      })}
    </div>
  );
};
export default AuthorList;
