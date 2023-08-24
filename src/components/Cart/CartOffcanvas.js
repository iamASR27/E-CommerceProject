import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import cartElements from "./CartItems";
import './CartOffcanvas.css';
import CartContext from "../store/cart-context";

function CartOffcanvas({ show, onHide }) {
  // const [cartItems, setCartItems] = useState(cartElements);
  //  const [cartItems, setCartItems] = useState([]);
  const { cartItems, removeFromCart } = useContext(CartContext);

  // useEffect(() => {
  //   setCartItems(cartElements);
  // }, []);

  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };

  return (
    <Offcanvas show={show} onHide={onHide} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem, index) => (
              <tr key={index}>
                <td className="cart-item">
                  <img src={cartItem.imageUrl} alt={cartItem.title} className="cart-item-image" />
                  <h2>{cartItem.title}</h2>
                </td>
                <td>{cartItem.price}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button variant="danger" onClick={() => handleRemoveItem(index)}>Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Offcanvas.Body>
      <div className="btn-purchase">
        <Button variant="success">Order</Button>
        </div>
    </Offcanvas>
  );
}

export default CartOffcanvas;
