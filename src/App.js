import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/AddTodo";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Todos} />
          <Route path="/add" component={AddTodo} />
          <Route path="/edit/:id" component={EditTodo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
