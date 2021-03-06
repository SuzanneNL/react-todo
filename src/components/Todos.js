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
        {todos.length > 0 && (
          <ul className="list-group">
            {todos.map((todo) => (
              <li className="list-group-item" key={todo.id}>
                <strong>{todo.description}</strong>
                <br></br>
                <Link
                  to={`/edit/${todo.id}`}
                  className="btn btn-sm btn-warning"
                >
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
        )}
        {todos.length < 1 && (
          <h2 className="text-center">There are no todos</h2>
        )}
      </div>
    </div>
  );
};

export default Todos;
