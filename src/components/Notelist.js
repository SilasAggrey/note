import React from "react";
import { useSelector } from "react-redux";

const UserList = (props) => {
  const notes = useSelector((state) => {
    return state.notes;
  });

  return (
    <div className="d-flex justify-content-center">
      <h1>Note list</h1>
      {notes.map((note, index) => {
        return (
          <div key={`${note.name}-${index}`}>
            <h1>{note.name}</h1>
            <h3>{note.email}</h3>
            <h5>{note.date}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
