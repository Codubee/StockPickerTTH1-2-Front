import './App.css';
  
import './App.css';
import NavigationBar from './components/NavigationBar';
import LandingPage from './views/LandingPage';
import MatchPage from './views/Match';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/Home">
            <LandingPage/>
          </Route>
        
          <Route path="/Match">
            <MatchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
