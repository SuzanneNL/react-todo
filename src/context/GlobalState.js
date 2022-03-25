import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  todos: [
    { id: 1, description: "Complete project" },
    { id: 2, description: "Learn React" },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  const addTodo = (todo) => {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  };

  const editTodo = (todo) => {
    dispatch({
      type: "EDIT_TODO",
      payload: todo,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        deleteTodo,
        addTodo,
        editTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
