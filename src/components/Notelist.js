import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";

const UserList = (props) => {
  const notes = useSelector((state) => {
    return state.notes;
  });

  return (
    <div>
      <h1 className="text-center">Notes</h1>
      {notes.map((note, index) => {
        return <Note key={note.id} note={note} />;
      })}
    </div>
  );
};

export default UserList;
