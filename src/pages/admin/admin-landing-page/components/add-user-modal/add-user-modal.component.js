import { useState } from 'react';
import { useEffect } from 'react';
import './add-user-modal.component.scss';
import { getLocalData } from '../../../../../shared/services/local-storage.service';

let localData;

function AddUserModal(props) {

  const [ modalOpen, setModalOpen ] = useState(false);
  const [ username, setUsername ] = useState('');
  const [ name, setName ] = useState('');
  const [ role, setRole ] = useState('buyer');
  const [ errorMessage, setErrorMessage ] = useState('');

  useEffect(() => {
    setModalOpen(props.modalOpen);
    setUsername('');
    setName('');
    setRole('buyer');
    localData = getLocalData();
  }, [props.modalOpen]);

  const onClickAdd = () => {
    if (props.onSubmitData && name && username && !localData.users[username]) {
      setErrorMessage('');
      props.onSubmitData({ name, role, username });
    } else if (!name && !username) {
      setErrorMessage('Name and username must be filled');
    } else if (localData.users[username]) {
      console.log('tet tot');
      setErrorMessage('Username already taken');
    }
  }

  const onClose = () => {
    if (props.onCloseModal) {  props.onCloseModal() }
  }

  return (
    <div>
      { modalOpen &&
        <div className="add-user-modal">
        <div className="modal-content">
          <div className="modal-header-section">
            <h2>Add User</h2>
            <button className="btn-close" onClick={ () => onClose() }>Close</button>
          </div>

          <input type="text" placeholder="User name" value={ username } onChange={ (e) => setUsername(e.target.value) } />
          <input type="text" placeholder="Name" value={ name } onChange={ (e) => setName(e.target.value) } />
          <select placeholder="Select user role" value={ role } onChange={ (e) => setRole(e.target.value) }>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>

          {
            errorMessage &&
            <span className="error-message">{ errorMessage }</span>
          }
          <button className="btn-add" onClick={ () => onClickAdd() }>Add</button>
        </div>
      </div>
      }
    </div>
  );
}

export default AddUserModal;