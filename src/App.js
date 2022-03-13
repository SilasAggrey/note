import React from "react";
import NoteForm from "./components/NoteForm";
import Notelist from "./components/Notelist";

function App() {
  return (
    <div style={{ width: "700px", margin: "auto", border: "1px solid black" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#333",
          padding: "15px 25px",
        }}
      >
        <a href="/#" className="text-white ">
          NotesApp
        </a>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <li>
            <a href="/#create" className="text-white ">
              Create Note
            </a>
          </li>
          <li style={{ marginLeft: "15px" }}>
            <a href="/#notes" className="text-white ">
              My Notes
            </a>
          </li>
        </ul>
      </div>
      <NoteForm />
      <Notelist />
    </div>
  );
}

export default App;
