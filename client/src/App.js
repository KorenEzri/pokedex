import "./App.css";
import logo from "./logo.svg";
import Footer from "./components/Footer/index";
import HomePage from "./components/pages/HomePage/index";
import Header from "./components/Header/index";
import Searchbar from "./components//Searchbar/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Router>
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
