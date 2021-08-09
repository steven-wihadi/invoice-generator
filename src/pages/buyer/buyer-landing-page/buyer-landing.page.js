import './buyer-landing.page.scss';
import Header from '../../../shared/components/header/header.component';
import ProductCardComponent from './compoents/product-card/product-card.component';
import { useEffect } from 'react';
import { getProductList } from '../../../shared/services/product.service';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

function BuyerLandingPage() {

  const [ productList, setProductList ] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getProductListFromLocale();
  }, []);

  const getProductListFromLocale = () => {
    setProductList([...getProductList()]);
  }

  return (
    <div className="buyer-landing-page-container">
      <Header />
      <div className="buyer-landing-content-wrapper">
        <button className="transaction-history-btn" onClick={ () => history.push("/buyer-transaction-history") }>Transaction History</button>

        <div className="product-list">
          { productList &&
            productList.map((product, indx) => 
              <ProductCardComponent key={ indx } product={ product } />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default BuyerLandingPage;
