const defaultData = {
  users: {
    admin: { name: 'Admin', role: 'admin', username: 'admin' },
    buyer: { name: 'Buyer', role: 'buyer', username: 'buyer' },
    seller: { name: 'Seller', role: 'seller', username: 'seller' }
  }
}

export function checkLocalStorage() {
  // localStorage.clear();
  if (!localStorage.getItem('invoice-app-data')) {
    localStorage.setItem('invoice-app-data', JSON.stringify(defaultData));
  }
  printLocaleDataStatus();
}

export function getLocalData() {
  return JSON.parse(localStorage.getItem('invoice-app-data'));
}

export function getUserList() {
  const localData = getLocalData();
  const result = [];
  for (let key in localData.users) {
    if (localData.users[key].role !== 'admin') {
      result.push(localData.users[key]);
    }
  }

  return result;
}

export function addUser(user) {
  const localData = getLocalData();
  localData.users[user.username] = user;
  localStorage.setItem('invoice-app-data', JSON.stringify(localData));
  printLocaleDataStatus();
}

export function removeUser(username) {
  const localData = getLocalData();
  delete localData.users[username];
  localStorage.setItem('invoice-app-data', JSON.stringify(localData));
  printLocaleDataStatus();
}

function printLocaleDataStatus() {
  console.log('local data: ', getLocalData());
}