import React, { useState, useEffect } from "react";

const TodoItem = (props) => {
  const [description, setDescription] = useState(props.todo.description);

  //delete function
  const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${props.todo.todo_id}`,
        { method: "DELETE" });
      console.log(deleteTodo);
    } catch (err) {
      console.error(err.message);
    }
  };

  //handlers
  const handleEditClick = () => props.handleClick("edit", props.todo.todo_id);
  const handleDeleteClick = async () => {
    try {
      await deleteTodo();
      props.handleListModify();
    } catch(err) {
      console.log(err.message);
    }
  };

  useEffect(() => setDescription(props.todo.description), [props.listModified]);

  return(
    <tr>
      <td>
        <p>{props.todo.description}</p>
      </td>
      <td>
        <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#editDialog" onClick={handleEditClick}>
          Edit
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={handleDeleteClick}>Delete</button>
      </td>
    </tr>
  );
};

export default TodoItem;
