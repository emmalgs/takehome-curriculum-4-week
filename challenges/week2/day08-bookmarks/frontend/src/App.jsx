import { useState, useEffect } from 'react';

const API = 'http://localhost:3000';

export default function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [tagFilter, setTagFilter] = useState('');
  // Add form state
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    // TODO: fetch bookmarks, apply ?tag= filter if set
  }, [tagFilter]);

  async function handleAdd() {
    // TODO: POST to /bookmarks, refresh list
  }

  async function handleDelete(id) {
    // TODO: DELETE /bookmarks/:id, refresh list
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Bookmarks</h1>

      {/* TODO: Add form */}
      <div style={{ marginBottom: '1rem' }}>
        <input placeholder="URL" value={url} onChange={e => setUrl(e.target.value)} />
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input placeholder="Tags (comma-separated)" value={tags} onChange={e => setTags(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* TODO: Tag filter */}

      {/* TODO: Bookmark list with delete buttons */}
      <pre>{JSON.stringify(bookmarks, null, 2)}</pre>
    </div>
  );
}
