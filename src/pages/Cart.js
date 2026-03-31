import React, { useState } from "react";
import "../styles/style.css";
import Footer from "../components/Footer";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Sample Product A", price: 25, quantity: 1, image: "/images/sample-a.jpg" },
    { id: 2, name: "Sample Product B", price: 30, quantity: 2, image: "/images/sample-b.jpg" }
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 5 : 0;
  const total = subtotal + shipping;

  // Build WhatsApp link with cart summary
  const whatsappMessage = `Hello DMIL TECH ENTERPRISES, I would like to order my cart items. Total: Ksh${total.toFixed(2)}`;
  const whatsappLink = `https://wa.me/254101489416?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="cart-page app-container">
      <section className="cart-hero">
        <h1>Your Shopping Cart</h1>
        <p>Review your items and proceed to checkout</p>
      </section>

      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p className="price">Ksh{item.price.toFixed(2)}</p>
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <input type="number" value={item.quantity} readOnly />
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <button className="remove-item" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <aside className="cart-summary">
        <h2>Order Summary</h2>
        <p>Subtotal: Ksh{subtotal.toFixed(2)}</p>
        <p>Shipping: Ksh{shipping.toFixed(2)}</p>
        <p><strong>Total: Ksh{total.toFixed(2)}</strong></p>
        <button className="checkout-btn">Proceed to Checkout</button>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          Order via WhatsApp
        </a>
      </aside>

      {/* Only one footer */}
      <Footer />
    </div>
  );
};

export default Cart;

