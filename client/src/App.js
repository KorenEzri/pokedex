import "./App.css";
import HomePage from "./components/pages/HomePage/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound/index";

function App() {
  return (
    <div className="wrapper">
      <div className="main">
        <Router>
          <Switch>
            <Route path="/404">
              <NotFound />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
