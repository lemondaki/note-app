import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import { useState, useEffect, useMemo } from "react";

const getLocalStorage = () => {
  const localNotes = localStorage.getItem("notes");
  return JSON.parse(localNotes) || [];
};

function App() {
  const [notes, setNotes] = useState(getLocalStorage());
  const [searchInput, setSearchInput] = useState("");
  const [toggleMode, setToggleMode] = useState(false);

  const filterNotes = useMemo(() => {
    return notes.filter((note) => note.text.includes(searchInput));
  }, [searchInput, notes]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const newNote = {
      id: Math.random() * 1000,
      text,
      date: new Date().toLocaleDateString("en-GB"),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (id, text) => {
    setNotes((notes) => notes.map((note) => (note.id === id ? { ...note, text } : note)));
  };

  return (
    <GlobalStyle toggleMode={toggleMode}>
      <Header setSearchInput={setSearchInput} setToggleMode={setToggleMode} />
      <NoteList
        notes={filterNotes}
        addNote={addNote}
        deleteNote={deleteNote}
        onSetNotes={setNotes}
        editNote={editNote}
      />
    </GlobalStyle>
  );
}

export default App;
