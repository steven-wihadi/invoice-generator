import './header.component.scss';

function Header() {
  return (
    <div className="header-container">
      <h1>
          <span className="invoice-text">Invoice</span> Generator
      </h1>
      <a href='/' className='logout-navigator'>Logout</a>
    </div>
  );
}

export default Header;
