import React, { useState, useEffect } from "react";
import Title from "../components/Title/Title";
import { Container, Form, Button, Alert, InputGroup } from "react-bootstrap";
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://practice-reactjs-8c122-default-rtdb.firebaseio.com/ecommerceApp/contact.json",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setShowSuccessMessage(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
      });

      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000); // Hide after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [showSuccessMessage]);

  return (
    <>
      <Title />
      <Container className="contact-form">
        <h2 className="text-center">Contact Us</h2>
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text>Name</InputGroup.Text>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Email</InputGroup.Text>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Phone</InputGroup.Text>
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </InputGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {showSuccessMessage && (
          <Alert variant="success" className="mt-3">
             Thank you for reaching out to us! We appreciate your message and will get back to you soon.
          </Alert>
        )}
      </Container>
    </>
  );
};

export default ContactPage;
