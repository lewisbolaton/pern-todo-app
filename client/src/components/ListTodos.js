import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";
import TodoItem from "./TodoItem";

const ListTodos = (props) => {
  const [todos, setTodos] = useState([]);
  const [selectedTodoId, setSelectedTodoId] = useState();

  //delete todo function
  const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  //handlers
  const handleItemClick = (button, id) => {
    if (button === "edit") {
      setSelectedTodoId(id);
    } else if (button === "delete") {
    }
  }
  const handleEditorClick = (button, id) => {
    if (button === "edit") {

    } else if (button === "close") {
    }
    setSelectedTodoId();
  }

  useEffect(() => { getTodos() }, [props.listModified]);

  return (
    <Fragment>
      <EditTodo todo_id={selectedTodoId} handleClick={handleEditorClick} handleListModify={props.handleListModify} />
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <TodoItem key={todo.todo_id} todo={todo} handleClick={handleItemClick} listModified={props.listModified} handleListModify={props.handleListModify} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
