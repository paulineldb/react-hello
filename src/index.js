import React from 'react';
import ReactDOM from 'react-dom/client';
import profilePic from './bob-ross-pic.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './index.css';
import reportWebVitals from './reportWebVitals';



let user = {
  name: "Bob",
  surname: "Ross",
  date_of_birth: "29-10-1942",
  address: "123 Main Street, Anytown, 12345",
  country: "USA",
  email: "bobross@example.com",
  telephone: "(555) 555-5555",
  company: "The Joy Of Painting",
  profile_picture: profilePic,
  shopping_cart: [
    { name: 'Acrylic paint set', quantity: 2, price: 12.99 },
    { name: 'Canvas board', quantity: 5, price: 4.99 },
    { name: 'Charcoal pencils', quantity: 1, price: 9.99 },
    { name: 'Easel', quantity: 1, price: 49.99 },
    { name: 'Paint brushes', quantity: 3, price: 7.99 }
  ]
};


function extractShoppingCart(myUser) {
  let shoppingCartArray = [];
  for (let i=0; i<myUser.shopping_cart.length; i++) {
    shoppingCartArray.push(myUser.shopping_cart[i]);
  }
  return shoppingCartArray;
}

const shoppingCart = (extractShoppingCart(user)).map(item => <li><em>Item:</em> {item.name} <br /> <em>Price:</em> ${item.price} <br /> <em>Quantity:</em> {item.quantity}</li>); 


function MyButton() {
  return (
    <>
      <Button id="email-button" variant="dark" href="mailto:{user.email}">Send an email to {user.name}</Button>
    </>
  );
}


const element = (
  <div>
    <div id='profile'>
      <h1>Welcome {user.name} {user.surname}!</h1>
      <img src={user.profile_picture} alt="profile pic" id="profile-pic"/>
      <p>
        <h2>Informations</h2>
        <em>First name:</em> {user.name} <br />
        <em>Last name:</em> {user.surname} <br />
        <em>Date of birth:</em> {user.date_of_birth} <br />
        <em>Company:</em> {user.company}
      </p>
      <p>
        <h2>Contact: </h2>
        <em>address:</em> {user.address} ({user.country}) <br />
        <em>phone number:</em> {user.telephone} <br />
        <em>email:</em> {user.email}
      </p>
      {MyButton()}
    </div>

    <div id='shopping-cart'>
      <h2>Shopping Cart:</h2> {<ul>{shoppingCart}</ul>}
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {element}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
