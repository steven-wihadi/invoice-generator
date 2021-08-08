import './admin-landing.page.scss';
import Header from '../../../shared/components/header/header.component';
import UserCardComponent from './components/user-card/user-card.component';
import AddUserModal from './components/add-user-modal/add-user-modal.component';
import { getUserList, addUser, removeUser } from '../../../shared/services/local-storage.service';
import { useEffect } from 'react';
import { useState } from 'react';

function AdminLandingPage() {

  const [ userList, setUserList ] = useState([]);
  const [ modalOpen, setModalOpen ] = useState(false);

  useEffect(() => {
    getListFromLocalData();
  }, []);

  const getListFromLocalData = () => {
    setUserList([...getUserList()]);
  }

  const onClickDelete = (user) => {
    removeUser(user.username);
    getListFromLocalData();
  }

  const onClickAddUser = () => { setModalOpen(true); }
  const onCloseModal = () => { setModalOpen(false); }
  const onClickSubmitAddUser = (user) => {
    addUser(user);
    setModalOpen(false);
    getListFromLocalData();
  }

  return (
    <div className="admin-landing-container">
      <Header />

      <div className="admin-landing-content-wrapper">
        <button className="add-user-btn" onClick={ () => onClickAddUser() }>Add User</button>

        <div className="list-user-container">
          <h2 className="list-title">User List</h2>
          <div className="list-content">
            { userList &&
              userList.map((user, indx) => 
                <UserCardComponent key={ indx } userData={ user } onClickRemove={ onClickDelete }/>
              )
            }
          </div>
        </div>

      </div>
      <AddUserModal modalOpen={ modalOpen } onSubmitData={ onClickSubmitAddUser } onCloseModal={ onCloseModal }/>
    </div>
  );
}

export default AdminLandingPage;
