import './login.page.scss';

function LoginPage() {
  return (
    <div className="login-page-container">
      <div className="login-content">
        <h1>
          <span className="invoice-text">Invoice</span> Generator 
          <span className="sort-moto">Lorem Ipsum is simply dummy text </span>
        </h1>
        <input className="login-input" type="text" value="admin" />
        <input className="login-input" type="password" value="loginSampleP@ssword" />
        <button className="login-btn">LOGIN</button>
      </div>
    </div>
  );
}

export default LoginPage;