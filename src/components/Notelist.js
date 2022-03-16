import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Note from "./Note";

const UserList = (props) => {
  const notes = useSelector((state) => {
    return state.notes;
  });

  return (
    <div style={{ padding: "20px" }}>
      {notes.length > 0 && <h1 className="text-center">Notes</h1>}
      <Row>
        {notes.length ? (
          notes.map((note, index) => {
            return (
              <Col xs={12} md={6}>
                <Note key={note.id} note={note} />;
              </Col>
            );
          })
        ) : (
          <div style={{ textAlign: "center" }}>
            <p>No notes please create a note</p>
            <Link to="/create">Create Note</Link>
          </div>
        )}
      </Row>
    </div>
  );
};

export default UserList;
