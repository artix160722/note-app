import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Note from "./pages/Note";
import { useState } from 'react'
import "./styles.css";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);

  const notepad = {
    add: function(note) {
      const noteTimestamp = Date.now();
      const noteDate = new Date(noteTimestamp);
      const newNote = [{
        additionDate: `${noteDate.getMonth() + 1}/${noteDate.getDate()}/${noteDate.getFullYear()}`,
        additionTimestamp: noteTimestamp,
        noteText: note
      }];
      setNotes(newNote.concat(notes));
    },
    delete: function(timestamp) {
      setNotes(notes.filter(filteredNote => filteredNote.additionTimestamp !== timestamp));
    }
  };

  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage notepad={notepad} notes={notes} />} />
          <Route path=":notetimestamp" element={<Note notepad={notepad} notes={notes} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default NotesApp;
