import React, { useState, useEffect } from "react";

const EditTodo = (props) => {
  const [description, setDescription] = useState("");

  //edit description function

  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${props.todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  const getTodo = async () => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${props.todo_id}`);
      const jsonData = await response.json();
      setDescription(jsonData.description);
    } catch (err) {
      console.error(err.message);
    }
  }

  //handlers
  const handleChange = e => setDescription(e.target.value);
  const handleEditClick = () => props.hadleClick("edit");
  const handleCloseClick = () => props.handleClick("delete");

  useEffect(() => {
    if (typeof props.todo_id === "number") {
      getTodo();
    } else {
      setDescription("");
    }
  }, [props.todo_id]);

  return (
    <div className="modal" id="editDialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Edit Todo</h3>
            <button type="button" className="close" data-dismiss="modal" onClick={handleCloseClick}>
              &times;
            </button>
          </div>

          <div className="modal-body">
            <input type="text" className="form-control" value={description} onChange={handleChange} />
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={handleEditClick}>
              Edit
            </button>
            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={handleCloseClick}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
