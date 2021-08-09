import './user-card.component.scss';
import PersonLogo from '../../../../../assets/imgs/user.png';

function UserCardComponent(props) {

  const userData = props.userData;

  return (
    <div className="user-card">
      <img src={ PersonLogo } alt="person-logo"/>
      <div className="user-info">
        <span className="user-name">
          { userData.name }
          <div className="user-type">
            <span className="">{ userData.role }</span>
          </div>
        </span>
        {/* <span className="add-date">23-Dec-2021</span> */}
      </div>
      <button className="remove-user-btn" onClick={ () => props.onClickRemove(props.userData) }>Remove</button>
    </div>
  );
}

export default UserCardComponent;
