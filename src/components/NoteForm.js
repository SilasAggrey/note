import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Col, Form, Row } from "react-bootstrap";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNote } from "../actions/noteActions";

const NoteForm = (props) => {
  const [title, setNoteTitle] = useState("");
  const [text, setNoteText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newNote = {
      id: uuid(),
      title: title,
      text: text,
      date: new Date(),
    };
    console.log(newNote);

    dispatch(addNote(newNote));
  };

  return (
    <Row>
      <Col sx={12}>
        <Form className="rounded p-4 p-sm-6" onSubmit={handleSubmit}>
          <FormGroup className="mb-3" controlId="formBasicName">
            <h3 className="text-muted">Note List App</h3>
            <FormLabel>Note Title</FormLabel>
            <FormControl
              placeholder="Title"
              type="text"
              onSubmit={handleSubmit}
              value={title}
              onChange={(e) => setNoteTitle(e.target.value)}
            />
          </FormGroup>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Note Text</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Text"
              rows={3}
              onSubmit={handleSubmit}
              value={text}
              onChange={(e) => setNoteText(e.target.value)}
            />
          </Form.Group>

          <button type="submit" className="w-100 mt-2 btn btn-primary">
            Submit
          </button>
        </Form>
      </Col>
    </Row>
  );
};

export default NoteForm;
