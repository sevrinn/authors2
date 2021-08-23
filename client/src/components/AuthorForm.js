import React, { useState } from "react";
import axios from "axios";

const AuthorForm = (props) => {
  const { initialName, onSubmitProp } = props;
  const [name, setName] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ name });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>Author Name</label>
        <br />
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </p>

      <input type="submit" />
    </form>
  );
};
export default AuthorForm;
