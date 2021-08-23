import React from "react";
import { Router } from "@reach/router";
import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";
function App() {
  return (
    <div className="App">
      <Router>
        <Main default path="/authors/" />
        <Detail path="/authors/:id" />
        <Update path="/authors/:id/edit" />
      </Router>
    </div>
  );
}
export default App;
