import React, { useState } from "react";
import "./App.css";

//components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

const App = () => {
  const [listModified, setListModified] = useState(false);

  //handlers
  const handleListModify = () => setListModified(~listModified);

  return (
    <div className="container">
      <InputTodo handleListModify={handleListModify} />
      <ListTodos listModified={listModified} handleListModify={handleListModify} />
    </div>
  );
}

export default App;
