import "./App.css";
import Create from "./components/Create";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">CRUDIZÃO NO REACT</h2>
        <div>
          <Route exact path="/create" compronent={Create} />
        </div>
      </div>
    </Router>
  );
}

export default App;
