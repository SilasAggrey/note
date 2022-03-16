import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import NoteForm from "./components/NoteForm";
import Notelist from "./components/Notelist";

function App() {
  return (
    <div
      style={{
        width: "700px",
        minHeight: "300px",
        margin: "auto",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#333",
          padding: "15px 25px",
        }}
      >
        {/* <a href="/#" className="text-white ">
          NotesApp
        </a> */}
        <Link style={{ color: "#fff" }} to="/">
          NotesApp
        </Link>

        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <li>
            {/* <a href="/#create" className="text-white ">
              Create Note
            </a> */}
            <Link style={{ color: "#fff" }} to="/create">
              Create Note
            </Link>
          </li>
          <li style={{ marginLeft: "15px" }}>
            {/* <a href="/#notes" className="text-white ">
              My Notes
            </a> */}
            <Link style={{ color: "#fff" }} to="/notes">
              My Notes
            </Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Notelist />} />
        <Route path="notes" element={<Notelist />} />
        <Route path="create" element={<NoteForm />} />
      </Routes>
    </div>
  );
}

export default App;
