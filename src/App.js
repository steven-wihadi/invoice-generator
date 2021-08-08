import './App.scss';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';
import LoginPage from "./pages/login/login.page";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'><LoginPage /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
