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
    case "EDIT_TODO":
      const updatedTodo = action.payload;

      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    default:
      return state;
  }
};

export default AppReducer;
