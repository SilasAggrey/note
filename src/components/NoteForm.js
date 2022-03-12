import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Form } from "react-bootstrap";

const NoteForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      id: uuid(),
      name: name,
      email: email,
      gen: gen,
    };

    props.addUser(newUser);
  };

  return (
    <form onSubmit={handleSubmit}> 
    <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="NoteTitle"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Date"
      />
      <input
        type="number"
        value={gen}
        onChange={(e) => setGen(e.target.value)}
        placeholder="   NoteText"
      />
      <input type="submit" />
      </form>
    
  );
};



export default NoteForm;
