import './App.scss';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';
import LoginPage from "./pages/login/login.page";
import AdminLandingPage from './pages/admin/admin-landing-page/admin-landing.page';
import { checkLocalStorage } from './shared/services/local-storage.service';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    checkLocalStorage();
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'><LoginPage /></Route>
          <Route exact path='/admin-landing'><AdminLandingPage /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
