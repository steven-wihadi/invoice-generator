import './seller-landing.page.scss';
import Header from '../../../shared/components/header/header.component';
import { getAllTransaction, makeInvoiceByBuyerUsername } from '../../../shared/services/local-storage.service';
import { useEffect } from 'react';
import { useState } from 'react';
import SellerInvoiceDetailComponent from './components/seller-invoice-detail/seller-invoice-detail.component';

function SellerLandingPage() {

  const [ invoiceList, setInvoiceList ] = useState();
  const [ selectedInvoice, setSelectedInvoice ] = useState();
  const [ modalOpen, setModalOpen ] = useState(false);

  useEffect(() => {
    getInvoiceList();
  }, []);

  const getInvoiceList = () => {
    setInvoiceList([...getAllTransaction()]);
    console.log('===buyer data: ', getAllTransaction());
  }

  const onCreateInvoice = (invoice) => {
    makeInvoiceByBuyerUsername(invoice.buyerUsername, invoice.transactionIndex);
    getInvoiceList();
  }

  const onClickInvoiceDetail = (invoice) => { setModalOpen(true); setSelectedInvoice(invoice); }
  const onCloseModal = () => { setModalOpen(false); }

  return (
    <div className="seller-landing-container">
      <Header />
      
      <div className="seller-landing-content">
        <div className="list-invoice">
          <h2 className="list-title">Invoice List</h2>
          <div className="list-content">
            { invoiceList &&
              invoiceList.map((invoice, indx) => 
              <div className="invoice-card" key={ indx }>
                <div className="flex-contaner">
                  <div className="invoice-info">
                    <span className="invoice-name">
                      { invoice.productName } ({ invoice.buyerUsername })
                      <div className="invoice-type">
                        <span className="">{ invoice.status }</span>
                      </div>
                    </span>
                    <span className="add-date">{ invoice.createdAt }</span>
                  </div>
                  <span className="price">{ invoice.totalPrice }</span>
                </div>

                { (invoice.status === 'Waiting for approval') &&
                  <button className="generate-invoice" onClick={ () => onCreateInvoice(invoice) }>Generate Invoice</button>
                }

                { (invoice.status === 'Approve') &&
                  <button className="view-invoice" onClick={ () => onClickInvoiceDetail(invoice) }>View Invoice</button>
                }
              </div>
              )
            }
          </div>
        </div>
      </div>

      <SellerInvoiceDetailComponent invoice={ selectedInvoice } modalOpen={ modalOpen } onCloseModal={ onCloseModal }/>
    </div>
  );
}

export default SellerLandingPage;
