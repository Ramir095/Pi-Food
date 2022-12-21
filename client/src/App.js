import { Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import RoutesAll from "./components/RoutesAll"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/*' component={RoutesAll} />
      </Switch>
    </div>
  );
}

export default App;
