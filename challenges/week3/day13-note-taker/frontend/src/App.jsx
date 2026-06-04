import { useState, useEffect } from 'react';

const API = 'http://localhost:8000';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // TODO: GET /notes/ and setNotes
  }, []);

  async function addNote() {
    // TODO: POST /notes/ with { title, content }, refresh list
  }

  async function deleteNote(id) {
    // TODO: DELETE /notes/:id/, refresh list
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Notes ({notes.length})</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} />
        <button onClick={addNote}>Add note</button>
      </div>

      {/* TODO: render notes list with delete buttons */}
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </div>
  );
}
