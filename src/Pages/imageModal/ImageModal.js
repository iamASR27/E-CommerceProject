import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import {
  MagnifierContainer,
  MagnifierZoom,
  MagnifierPreview,
} from "react-image-magnifiers";

// const ImageModal = ({ show, onHide, imageUrl }) => {
//   return (
//     <Modal show={show} onHide={onHide} centered size="lg">
//       <Modal.Header closeButton>
//         <Modal.Title>Zoomed In Image</Modal.Title>
//       </Modal.Header>
//       <Modal.Body  className="image-modal-body">
//           <img src={imageUrl} alt="Zoomed In" className="zoomed-image" />
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

const ImageModal = ({ show, onHide, imageUrl }) => {
  return (
    <Modal show={show} onHide={onHide} centered size="xl">
    <Modal.Header closeButton>
      <Modal.Title>Image Magifier</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <MagnifierContainer className="image-container">
        <div className="row">
          <div className="col-md-6">
            <div className="example-class">
              <MagnifierPreview
                imageSrc={imageUrl}
                style={{ height: "400px", width: "100%" }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="zoomed-image">
              <MagnifierZoom
                style={{ height: "400px", width: "100%" }}
                imageSrc={imageUrl}
              />
            </div>
          </div>
        </div>
      </MagnifierContainer>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);
};

export default ImageModal;
