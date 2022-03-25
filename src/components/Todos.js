import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Heading from "./layout/Heading";

import { GlobalContext } from "../context/GlobalState";

const Todos = () => {
  const { todos, deleteTodo } = useContext(GlobalContext);

  return (
    <div className="container">
      <Heading />
      <div className="mt-3">
        <ul className="list-group">
          {todos.map((todo) => (
            <li className="list-group-item">
              <strong>{todo.description}</strong>
              <br></br>
              <Link to={`/edit/${todo.id}`} className="btn btn-sm btn-warning">
                Edit
              </Link>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
