import React, { useState, useEffect } from "react";

const TodoItem = (props) => {
  const [description, setDescription] = useState(props.todo.description);

  //handlers
  const handleEditClick = () => props.handleClick("edit", props.todo.todo_id);
  const handleDeleteClick = () => props.handleClick("delete", props.todo.todo_id)

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
