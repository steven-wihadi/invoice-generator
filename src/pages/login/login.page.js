import './login.page.scss';
import { getLocalData } from '../../shared/services/local-storage.service';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

function LoginPage() {

  const history = useHistory();
  const [ username, setUserName ] = useState('admin');

  const doLogin = () => {
    const localData = getLocalData();
    if (localData.users[username]) {
      switch(localData.users[username].role) {
        case 'admin': history.push("/admin-landing"); break;
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