import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import "./ImageModal.css";

const ImageModal = ({ show, onHide, imageUrl }) => {
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Zoomed In Image</Modal.Title>
      </Modal.Header>
      <Modal.Body  className="image-modal-body">
          <img src={imageUrl} alt="Zoomed In" className="zoomed-image" zoomFactor={1.5} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;
