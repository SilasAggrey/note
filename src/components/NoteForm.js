import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Form } from "react-bootstrap";
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
    <div>
      <Form className="rounded p-4 p-sm-6" onSubmit={handleSubmit}>
        <FormGroup className="mb-3" controlId="formBasicName">
          <h1>Note List App</h1>
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
        <button type="submit" className="w-100 mt-2 btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default NoteForm;
