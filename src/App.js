import './App.scss';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';
import LoginPage from "./pages/login/login.page";
import AdminLandingPage from './pages/admin/admin-landing-page/admin-landing.page';
import { checkLocalStorage } from './shared/services/local-storage.service';
import { checkProduct } from './shared/services/product.service';
import { useEffect } from 'react';
import BuyerLandingPage from './pages/buyer/buyes-landing-page/buyer-landing.page';

function App() {

  useEffect(() => {
    checkLocalStorage();
    checkProduct();
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'><LoginPage /></Route>
          <Route exact path='/admin-landing'><AdminLandingPage /></Route>
          <Route exact path='/buyer-landing'><BuyerLandingPage /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
