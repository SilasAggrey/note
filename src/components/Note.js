import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import { deleteNote, editNote } from "../actions/noteActions";

const Note = (props) => {
  const note = props.note;
  const dispatch = useDispatch();

  const [isShowing, setIsShowing] = useState(false);
  const [title, setNoteTitle] = useState(note.title);
  const [text, setNoteText] = useState(note.text);

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  const handleSubmit = () => {
    let noteData = {
      id: note.id,
      title: title,
      text: text,
      date: note.date,
    };

    dispatch(editNote(noteData));
    handleClose();
  };

  const handleClose = () => {
    setIsShowing(false);
  };

  return (
    <>
      <div className="mb-4 ">
        <Card className="bg-dark text-white">
          <Card.Body>
            <Card.Text>Title: {note.title}</Card.Text>
            <Card.Text>Note Text: {note.text}</Card.Text>
            <Card.Text>
              Date created: {note.date.toLocaleDateString()}
            </Card.Text>
            <Button
              onClick={() => setIsShowing(true)}
              variant="outline-primary"
              size="lg"
            >
              Edit
            </Button>
            <Button
              className="ml-4"
              variant="outline-danger"
              size="lg"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>

      <Modal show={isShowing} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup className="mb-3" controlId="formBasicName">
            <FormLabel>Note Title</FormLabel>
            <FormControl
              type="text"
              placeholder="Title"
              onSubmit={handleSubmit}
              value={title}
              onChange={(e) => setNoteTitle(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="mb-3" controlId="formBasicEmail">
            <FormLabel>Note Text</FormLabel>
            <FormControl
              type=""
              placeholder="Text"
              onSubmit={handleSubmit}
              value={text}
              onChange={(e) => setNoteText(e.target.value)}
            />
          </FormGroup>
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

export default Note;
