import { useState } from 'react';
import { useEffect } from 'react';
import './seller-invoice-detail.component.scss';

function SellerInvoiceDetailComponent(props) {
  console.log('==invoice: ', props);

  const [ modalOpen, setModalOpen ] = useState(false);
  const [ invoice, setInvoice ] = useState('');

  useEffect(() => {
    setModalOpen(props.modalOpen);
    setInvoice(props.invoice);
  }, [props.modalOpen, props.invoice]);

  const onClose = () => {
    if (props.onCloseModal) {  props.onCloseModal() }
  }

  return (
    <div>
      { modalOpen &&
        <div className="invoice-detail-container">
          <div className="modal-content">
            <div className="modal-header-section">
              <h2>Invoice Detail</h2>
              <button className="btn-close" onClick={ () => onClose() }>Close</button>
            </div>

            <div className="invoice-detail">
              <div className="header-invoice">
                <span className="product-name">{ invoice.buyerUsername }</span>
                <span className="invoice date">Create at: { invoice.createdAt }</span>
              </div>

              <div className="product-detail">
                <div className="left">
                  <span className="product-name">{ invoice.productName }</span>
                </div>
                <div className="right">
                  <span className="product-price">{ invoice.productPrice }</span>
                  <span className="qty-text">Quatity: <span className="qty-value">{ invoice.quantity }</span></span>
                  <span className="total-value">{ invoice.totalPrice }</span>
                </div>
              </div>

              <span className="confirm-date">Confirm date: { invoice.approvaDate }</span>
              <span className="confirm-by">by { invoice.approveWith }</span>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default SellerInvoiceDetailComponent;
