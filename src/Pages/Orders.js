import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Img1 from '../Images/veg-burger.jpeg';
import Img2 from '../Images/chickenburger.jpeg';
import Img3 from '../Images/MACDONALDS-FRIES-1109.jpeg';
import Img4 from '../Images/MACDONALDS-COLD-DRINKS1109.jpeg';
import Img5 from '../Images/MACDONALDS-COFFEE1109.jpeg';
import Img6 from '../Images/Brownie-Hot-Fudge.png';
import Img7 from '../Images/McFlurry-Oreo.png';
import Img8 from '../Images/Blueberry-Cheese-Cake.png';
import Img9 from '../Images/Chocochip-Muffin.png';
import '../Styles/Orders.css';

const Orders = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState('');
  const [checkoutMessage, setCheckoutMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      setIsAuthenticated(true);
      setUserToken(token);
    }
  }, []);

  const products = [
    { id: 1, name: 'Veg Burger', price: 250.00, imgSrc: Img1 },
    { id: 2, name: 'Chicken Burger', price: 399.00, imgSrc: Img2 },
    { id: 3, name: 'Fries', price: 120.00, imgSrc: Img3 },
    { id: 4, name: 'Cold Drinks', price: 150.00, imgSrc: Img4 },
    { id: 5, name: 'Cold Coffee', price: 200.00, imgSrc: Img5 },
    { id: 6, name: 'Brownie-Hot-Fudge', price: 138.00, imgSrc: Img6 },
    { id: 7, name: 'McFlurry Oreo', price: 129.00, imgSrc: Img7 },
    { id: 8, name: 'Blueberry Cheese Cake', price: 229.00, imgSrc: Img8 },
    { id: 9, name: 'Chocochip Muffin', price: 142.00, imgSrc: Img9 }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
    setMessage(`${product.name} has been added to the cart.`);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      setCheckoutMessage('Please log in to proceed with checkout.');
      setTimeout(() => setCheckoutMessage(''), 3000);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/orders', {
        items: cart,
        total
      }, {
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      });
      if (response.status === 201) {
        setCheckoutMessage('Thank you for your purchase!');
        setCart([]);
        setTotal(0);
      } else {
        setCheckoutMessage('Checkout failed. Please try again.');
      }
    } catch (error) {
      console.error("Error during checkout:", error.response ? error.response.data : error.message);
      setCheckoutMessage(`Checkout failed: ${error.response ? error.response.data : error.message}`);
    }
    setTimeout(() => setCheckoutMessage(''), 3000);
  };

  return (
    <div>
      <section id="cart">
        <div className="cart">
          <h2>Your Cart</h2>
          <ul id="cart-items">
            {cart.map((item, index) => (
              <li key={index}>{item.name} - Rs.{item.price}</li>
            ))}
          </ul>
          <p>Total: Rs.<span id="cart-total">{total}</span></p>
          <button id="checkout-btn" className="mybtn2" onClick={handleCheckout}>Checkout</button>
          {checkoutMessage && <div className="message">{checkoutMessage}</div>}
        </div>
        
        <div className="products" id="orders">
          <h2>Available Menu</h2>
          <ul id="product-list">
            {products.map((product) => (
              <li key={product.id} className="product-item">
                <img src={product.imgSrc} className="product-img" alt={product.name} />
                <div className="product-info">
                  {product.name} <br /> Rs. {product.price}
                </div>
                <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>
        {message && <div className="message">{message}</div>}
      </section>
    </div>
  );
};

export default Orders;
