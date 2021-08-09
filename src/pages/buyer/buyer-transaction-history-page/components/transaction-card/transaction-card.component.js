import './transaction-card.component.scss';

function TransactionCardComponent({ transaction }) {
  return (
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
  );
}

export default TransactionCardComponent;
