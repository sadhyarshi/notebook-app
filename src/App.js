import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');

  const addNote = () => {
    if (noteText.trim() !== '') {
      const newNote = {
        text: noteText,
        timestamp: new Date().toLocaleString()
      };
      setNotes([...notes, newNote]);
      setNoteText('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addNote();
    }
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <h1>Notebook App</h1>
      <input
        type="text"
        placeholder="Enter your note here"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={addNote}>Add Note</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <div className="note-text">{note.text}</div>
            <div className="note-timestamp">{note.timestamp}</div>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
