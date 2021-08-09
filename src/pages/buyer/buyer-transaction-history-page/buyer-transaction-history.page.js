import './buyer-transaction-history.page.scss';
import Header from '../../../shared/components/header/header.component';
import { getTransactionByBuyerId, getUserLogin } from '../../../shared/services/local-storage.service';
import { useEffect } from 'react';
import { useState } from 'react';

function BuyerTrasactionHistory() {

  const [ transactionList, setTransactionList ] = useState([]);

  useEffect(() => {
    const buyerUsername = getUserLogin().username;
    setTransactionList([...getTransactionByBuyerId(buyerUsername)]);
  }, []);

  return (
    <div className="buyer-transaction-history-container">
      <Header />
      
      <div className="transaction-history-container">
        <div className="list-transaction">
          <h2 className="list-title">Transaction History</h2>
          <div className="list-content">
            { transactionList &&
              transactionList.map((transaction) => 
              <div className="transaction-card">
                <div className="transaction-info">
                  <span className="transaction-name">
                    { transaction.productName }
                    <div className="transaction-type">
                      <span className="">{ transaction.status }</span>
                    </div>
                  </span>
                </div>
                <span className='transaction-date'>{ transaction.createdAt }</span>
              </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerTrasactionHistory;
