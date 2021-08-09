# First thing frist
  run: npm install
  then, run script: npm start
  to run this project

default user accout:
- admin,
- buyer
- seller

# ADMIN
- Can view all user buyer, and seller.
- Can Add user (buyer or seller).


# BUYER
- Can buy product, to create new one invoice, that can be confirm by seller. You can buy a product by click which one of product-card, that's guide you to go to detail product-page, and then in product-page set 'quatity' of product and click 'Buy' button. 
- Can see Transaction History buyer make it.

# SELLER
- Can view all invoice (approve or waiting to approve).
- Can generate invoice by click button 'Generate Invoice'. Invoice which already generate will change the 'Generate Invoice' to 'View Invoice' button.
- Can view detail invoice with click 'View Invoice' button.


# TEST CASE WHICH ALREADY TESTED
- Login with admin, seller, buyer.
- Go to login page with jump link, that's will make come to landing page depends of role what user login before.
- Add user with admin account.
- Buy a product using buyer account.
- Go to 'Transactio History' page using buyer account.
- Generate invoice using seller account.
- View detail Invoice using seller Account