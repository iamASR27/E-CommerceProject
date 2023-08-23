import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import cartElements from "./CartItems";
import './CartModal.css';

const CartModal = ({ show, onHide }) => {
    // const [cartItems, setCartItems] = useState(cartElements);

//   const handleRemoveItem = (index) => {
//     const updatedCart = cartItems.filter((_, i) => i !== index);
//     setCartItems(updatedCart);
//     console.log("remove")
//   };

  return (
    <Modal centered show={show} onHide={onHide} size="lg" className="modal-content" animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
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
            {cartElements.map((cartItem, index) => (
              <tr key={index}>
                <td className="cart-item">
                  {/* <div className="cart-item"> */}
                    <img src={cartItem.imageUrl} alt={cartItem.title} className="cart-item-image" />
                    <h2>{cartItem.title}</h2>
                  {/* </div> */}
                </td>
                <td>{cartItem.price}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button variant="danger" /*onClick={() => handleRemoveItem(index)}*/>Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
