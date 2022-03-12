import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Form } from "react-bootstrap";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNote } from "../actions/noteActions";

const NoteForm = (props) => {
  const [name, setNoteTitle] = useState("");
  const [email, setDate] = useState("");
  const [gen, setNoteText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newNote = {
      id: uuid(),
      name: name,
      email: email,
      date: new Date(),
    };

    dispatch(addNote(newNote));
  };

  return (
    <div className="d-flex justify-content-center">
      <Form className="rounded p-4 p-sm-6" onSubmit={handleSubmit}>
        <FormGroup className="mb-3" controlId="formBasicName">
          <h1>NOTE</h1>
          <FormLabel>Note Title</FormLabel>
          <FormControl
            type="text"
            placeholder="Name"
            onSubmit={handleSubmit}
            value={name}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>Date</FormLabel>
          <FormControl
            type="number"
            placeholder="Enter Number"
            onSubmit={handleSubmit}
            value={email}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>Note Text</FormLabel>
          <FormControl
            type=""
            placeholder="Location"
            onSubmit={handleSubmit}
            value={gen}
            onChange={(e) => setNoteText(e.target.value)}
          />
        </FormGroup>
        <button type="submit" class="w-100 mt-2 btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default NoteForm;
