import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Card } from "react-bootstrap";

const User = (props) => {
  const user = props.user;
  const dispatch = useDispatch();

  const [isShowing, setIsShowing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [gen, setGen] = useState(user.gen);

  const handleDelete = () => {
    
  };

  const handleSubmit = () => {
    let userData = {
      id: user.id,
      name: name,
      email: email,
      gen: gen,
    };

   

    handleClose();
  };

  const handleClose = () => {
    setIsShowing(false);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
      <Card style={{ width: '18rem' }} >
  <Card.Body>
    <Card.Text>Name:{user.name}</Card.Text>
    <Card.Text>PhoneNumber:{user.email}</Card.Text>
    <Card.Text>Location:{user.gen}</Card.Text>
    <Button onClick={() => setIsShowing(true)} variant="outline-primary" size="lg">Edit</Button>
        <Button variant="outline-danger" size="lg" onClick={handleDelete}>
          Delete
        </Button>
  </Card.Body>
</Card>
      </div>

      <Modal show={isShowing} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={gen}
            onChange={(e) => setGen(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default User;

