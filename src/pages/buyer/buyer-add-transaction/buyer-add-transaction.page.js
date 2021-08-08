import './buyer-add-transaction.page.scss';
import Header from '../../../shared/components/header/header.component';
import { useParams } from "react-router-dom";
import { getProductById } from "../../../shared/services/product.service";
import { getUserLogin, addTransactionToBuyer, generateDate } from "../../../shared/services/local-storage.service";
import { useEffect } from 'react';
import { useState } from 'react';

function BuyerAddTransactionPage() {
  const { productId } = useParams();
  const [ product, setProduct ] = useState();
  const [ quantity, setQuantity ] = useState(1);

  useEffect(() => { 
    setProduct(getProductById(productId));
  }, []);

  const onClickBuy = () => {
    const transactionDetail = {
      productName: product.name,
      productPrice: product.price,
      quantity,
      totalPrice: product.price * quantity,
      createdAt: generateDate(),
      status: 'waiting_for_approval',
      approvaDate: ''
    };
    const buyerUsername = getUserLogin().username;
    addTransactionToBuyer(buyerUsername, transactionDetail);
  }

  return (
    <div className="buyer-add-transaction">
      <Header />

      { product && 
        <div className="product-content">
          <h2>{ product.name }</h2>

          <div className="flex-container">
            <img src={ product.imgSrc } />
            <div className="description-container">
              <p className="description-text">{ product.description }</p>
              <span className="product-price">{ product.price }</span>
              <div className="quantity-section">
                <label>Quantity: </label>
                <input type="number" min="1" value={ quantity } onChange={ (e) => setQuantity(e.target.value) }/>
              </div>
              <span className="total-text">{ quantity * product.price }</span>
              <button className="buy-btn" onClick={ () => onClickBuy() }>BUY</button>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default BuyerAddTransactionPage;
