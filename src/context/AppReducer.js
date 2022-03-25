const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default AppReducer;
