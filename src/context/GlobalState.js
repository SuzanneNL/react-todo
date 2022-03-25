import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  todos: [
    {id: 1, todo: "Complete project" },
    {id: 2, todo: "Learn React" },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
