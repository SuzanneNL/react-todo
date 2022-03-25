import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import Card from "./layout/Card";

import { GlobalContext } from "../context/GlobalState";

const EditTodo = (props) => {
  const [selectedTodo, setSelectedTodo] = useState({
    id: "",
    description: "",
  });
  const { todos, editTodo } = useContext(GlobalContext);
  const history = useHistory();
  const currentId = props.match.params.id;

  useEffect(() => {
    const todoId = currentId;

    const selectedTodo = todos.find((todo) => todo.id === todoId);
    setSelectedTodo(selectedTodo);
  }, [currentId, todos]);

  const submitHandler = (event) => {
    event.preventDefault()
    editTodo(selectedTodo);
    history.push("/");
  };

  const getselectedTodo = (event) => {
    setSelectedTodo({
      ...selectedTodo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div class="form-group">
          <label for="todo">Edit todo</label>
          <input
            type="text"
            class="form-control"
            id="todo"
            name="description"
            value={selectedTodo.description}
            onChange={getselectedTodo}
            placeholder="Edit your todo"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Edit todo
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    </Card>
  );
};

export default EditTodo;
