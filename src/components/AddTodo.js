import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

import Card from "./layout/Card";

import { GlobalContext } from "../context/GlobalState";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const { addTodo } = useContext(GlobalContext);
  const history = useHistory();

  const getTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault()
    const todo = {
      id: uuid(),
      description: newTodo,
    };
    addTodo(todo);
    history.push("/");
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div class="form-group">
          <label for="todo">Add todo</label>
          <input
            type="text"
            class="form-control"
            id="todo"
            value={newTodo}
            onChange={getTodo}
            placeholder="Enter your todo"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    </Card>
  );
};

export default AddTodo;
