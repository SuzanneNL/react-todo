import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark mt-5 mr-auto justify-content-right">
      <Link to="/" className="navbar-brand">
        Your Todos
      </Link>

      <Link to="add" className="btn btn-primary">
        Add Todo
      </Link>
    </nav>
  );
};

export default Heading;
