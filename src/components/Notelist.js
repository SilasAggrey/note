import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Note from "./Note";

const UserList = (props) => {
  const notes = useSelector((state) => {
    return state.notes;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-center">Notes</h1>
      <Row>
        {notes.map((note, index) => {
          return (
            <Col xs={12} md={6}>
              <Note key={note.id} note={note} />;
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default UserList;
