import "./App.css";
import Navbar from "./Components/Navbar";
// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import People from "./Pages/People";
import Starship from "./Pages/Starship";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/people" component={People} />
        <Route path="/starships" component={Starship} />
        {/* Yönlendirmeleri düzelt!! */}
      </Switch>
    </Router>
  );
}

export default App;
