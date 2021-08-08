import './login.page.scss';
import { getLocalData, setUserLogin, getUserLogin } from '../../shared/services/local-storage.service';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';

function LoginPage() {

  const history = useHistory();
  const [ username, setUserName ] = useState('');

  useEffect(() => {
    if (getUserLogin() !== '') {
      const userLogin = getUserLogin();
      switch(userLogin.role) {
        case 'admin': history.push("/admin-landing"); break;
        case 'buyer': history.push("/buyer-landing"); break;
      }
    }
  }, []);

  const doLogin = () => {
    const localData = getLocalData();
    if (localData.users[username]) {
      setUserLogin(localData.users[username]);
      switch(localData.users[username].role) {
        case 'admin': history.push("/admin-landing"); break;
        case 'buyer': history.push("/buyer-landing"); break;
      }
    }
  }

  return (
    <div className="login-page-container">
      <div className="login-content">
        <h1>
          <span className="invoice-text">Invoice</span> Generator 
          <span className="sort-moto">Lorem Ipsum is simply dummy text </span>
        </h1>
        <input className="login-input" type="text" value={ username } onChange={ (e) => setUserName(e.target.value) } />
        <input className="login-input" type="password" value="loginSampleP@ssword" />
        <button className="login-btn" onClick={ () => doLogin() }>LOGIN</button>
      </div>
    </div>
  );
}

export default LoginPage;