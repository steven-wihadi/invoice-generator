const defaultData = {
  users: {
    admin: { name: 'Admin', role: 'admin', username: 'admin' },
    buyer: { name: 'Buyer', role: 'buyer', username: 'buyer' },
    seller: { name: 'Seller', role: 'seller', username: 'seller' }
  }
}

export function setUserLogin(user) {
  localStorage.setItem('user-login-info', JSON.stringify(user));
  console.log('===: ', getUserLogin());
}

export function getUserLogin() {
 return JSON.parse(localStorage.getItem('user-login-info'));
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

export function addTransactionToBuyer(buyerUsername, transactionDetail) {
  const localData = getLocalData();
  if (localData.users[buyerUsername] && localData.users[buyerUsername].role === 'buyer') {
    if (!localData.users[buyerUsername].transaction) { localData.users[buyerUsername].transaction = [] };
    localData.users[buyerUsername].transaction.push(transactionDetail);
    localStorage.setItem('invoice-app-data', JSON.stringify(localData));
    printLocaleDataStatus();
  }
}

export function getTransactionByBuyerId(buyerUsername) {
  const localData = getLocalData();
  if (localData.users[buyerUsername] && localData.users[buyerUsername].role === 'buyer') {
    return (localData.users[buyerUsername].transaction) ? localData.users[buyerUsername].transaction : [];
  } else {
    return [];
  }
}

export function getAllTransaction() {
  const localData = getLocalData();
  let result = [];
  for (let key in localData.users) {
    if (localData.users[key].role === 'buyer' && localData.users[key].transaction) {
      localData.users[key].transaction.forEach((transaction, index) => {
      const data = transaction;
      data.buyerUsername = key;
      data.transactionIndex = index
      result.push(data);
      });
    }
  }
  printLocaleDataStatus();
  return result;
}

export function makeInvoiceByBuyerUsername(buyerUsername, transactionIndex) {
  const localData = getLocalData();
  localData.users[buyerUsername].transaction[transactionIndex].status = 'Approve';
  localData.users[buyerUsername].transaction[transactionIndex].approvaDate = generateDate();
  localData.users[buyerUsername].transaction[transactionIndex].approveWith = getUserLogin().username;
  localStorage.setItem('invoice-app-data', JSON.stringify(localData));
}

export function generateDate() {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  return `${day}-${month}-${year}`;
}

export function generateTime() {
  return `${new Date().getHours}:${new Date().getMinutes()}`;
}

function printLocaleDataStatus() {
  console.log('local data: ', getLocalData());
}