const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload;
        }),
      };
    case "ADD_TODO":
      return {
        todos: [action.payload, ...state.todos],
      };
    default:
      return state;
  }
};

export default AppReducer;
