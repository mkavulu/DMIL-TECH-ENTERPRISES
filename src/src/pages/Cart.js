import React, { useContext } from "react";
import "../styles/style.css";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item, updateQuantity, removeItem }) => (
  <div className="cart-item">
    <img src={item.image} alt={item.name} className="cart-image" />
    <div className="cart-details">
      <h3>{item.name}</h3>
      <p className="price">Ksh{item.price?.toFixed(2) || "N/A"}</p>
      <div className="quantity-control">
        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
        <input type="number" value={item.quantity} readOnly />
        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
      </div>
      <button
        className="remove-item"
        onClick={() => {
          if (window.confirm("Remove this item from cart?")) {
            removeItem(item.id);
          }
        }}
      >
        Remove
      </button>
    </div>
  </div>
);

const Cart = () => {
  // ✅ Use CartContext instead of local state
  const { cartItems, updateQuantity, removeItem } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 5 : 0;
  const total = subtotal + shipping;

  const whatsappMessage = `Hello DMIL TECH ENTERPRISES, I would like to order my cart items:\n${cartItems
    .map(i => `${i.name} x${i.quantity}`)
    .join(", ")}\nTotal: Ksh${total.toFixed(2)}`;
  const whatsappLink = `https://wa.me/254101489416?text=${encodeURIComponent(
    whatsappMessage
  )}`;

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
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
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

      <Footer />
    </div>
  );
};

export default Cart;
