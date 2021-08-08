import './header.component.scss';
import { setUserLogin } from "../../services/local-storage.service";
import { useHistory } from "react-router-dom";

function Header() {

  const history = useHistory();
  const doLogout = () => {
    setUserLogin('');
    history.push('/');
  }

  return (
    <div className="header-container">
      <h1>
          <span className="invoice-text">Invoice</span> Generator
      </h1>
      <a onClick={ () => doLogout() } className='logout-navigator'>Logout</a>
    </div>
  );
}

export default Header;
