import React from "react";
import { Link } from "react-router-dom";

import Heading from "./layout/Heading";

const Todos = () => {
  return (
    <div className="container">
      <Heading />
      <div className="mt-3">
        <ul className="list-group">
          <li className="list-group-item">
            <strong>First todo</strong>
            <br></br>
            <Link to="/edit/:id" className="btn btn-sm btn-warning">
              Edit
            </Link>
            <button className="btn btn-sm btn-danger">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Todos;
