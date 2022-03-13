import React from "react";
import NoteForm from "./components/NoteForm";
import Notelist from "./components/Notelist";

function App() {
  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <NoteForm />
      <Notelist />
    </div>
  );
}

export default App;
