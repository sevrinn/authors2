import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorForm from "../components/AuthorForm";
import DeleteButton from "../components/DeleteButton";
import { navigate } from "@reach/router";

const Update = (props) => {
  const { id, initialName } = props;
  const [author, setAuthor] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors/" + id).then((res) => {
      setAuthor(res.data.name);
      console.log(res.data.name);
      console.log(initialName);
      setLoaded(true);
    });
  }, []);

  const updateAuthor = (author) => {
    axios
      .put("http://localhost:8000/api/authors/" + id, author)
      .then((res) => console.log(res));
  };
  return (
    <div>
      <h1>Update an Author</h1>
      {loaded && (
        <>
          <AuthorForm onSubmitProp={updateAuthor} initialName={author.name} />
          <DeleteButton
            authorId={author._id}
            successCallback={() => {
              navigate("/");
              console.log(author._id);
            }}
          />
        </>
      )}
    </div>
  );
};
export default Update;
