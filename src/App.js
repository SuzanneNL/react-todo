import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Todos} />
            <Route path="/add" component={AddTodo} />
            <Route path="/edit/:id" component={EditTodo} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
