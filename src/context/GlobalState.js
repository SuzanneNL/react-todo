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

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        deleteTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
