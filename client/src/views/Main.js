import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorForm from "../components/AuthorForm";
import AuthorList from "../components/AuthorList";

const Main = () => {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/api/authors").then((res) => {
      setAuthors(res.data);
      setLoaded(true);
    });
  }, []);
  const removeFromDom = (authorId) => {
    setAuthors(authors.filter((author) => author._id !== authorId));
  };

  const createAuthor = (author) => {
    axios.post("http://localhost:8000/api/authors", author).then((res) => {
      setAuthors([...authors, res.data]);
    });
  };
  return (
    <div>
      <AuthorForm onSubmitProp={createAuthor} initialName="" />
      {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom} />}
    </div>
  );
};
export default Main;
