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
import BuyerLandingPage from './pages/buyer/buyer-landing-page/buyer-landing.page';
import BuyerAddTransactionPage from './pages/buyer/buyer-add-transaction/buyer-add-transaction.page';
import BuyerTrasactionHistory from './pages/buyer/buyer-transaction-history-page/buyer-transaction-history.page';
import SellerLandingPage from './pages/seller/seller-landing-page/seller-landing.page';

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
          <Route exact path='/buyer-add-transaction/:productId'><BuyerAddTransactionPage /></Route>
          <Route exact path='/buyer-transaction-history'><BuyerTrasactionHistory /></Route>
          <Route exact path='/seller-landing'><SellerLandingPage /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
