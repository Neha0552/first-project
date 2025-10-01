import  { useState, useEffect } from 'react';
// IMPORTING EXTERNAL STYLESHEET DOCUMENT SPECIFICALLY FOR THIS COMPONENT. (Cart.jsx).
import './Cart.css';

const productsList = [
  { id: 1, name: 'Beds Design', price: 15000 },
  { id: 2, name: 'Reclining Sofa', price: 8000 },
  { id: 3, name: 'Living Chair Design', price: 5000 },
  { id: 4, name: 'Sofa Cum Beds', price: 12000 },
  { id: 5, name: 'Coffee Tables', price: 10000 },
  { id: 6, name: 'Desks', price: 12000 }
];

function Cart() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on first render
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div style={{ padding: '20px' }} id="mainContainer">
      <h1 id="mainHeading">Products</h1>
      {productsList.map(product => (
        <div key={product.id} style={{ marginBottom: '10px' }}>
          {product.name} - ${product.price.toFixed(2)}{' '}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <h2>🛒 Cart ({cart.length} items)</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
        ))}
      </ul>
      <p><strong>Total:</strong> ${total}</p>
    </div>
  );
}

export default Cart;
