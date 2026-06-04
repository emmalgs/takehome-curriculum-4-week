import { useState, useEffect } from 'react';

const API = 'http://localhost:8000';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: fetch movies, pass ?q=query when query is set
    // fetch(`${API}/movies${query ? `?q=${query}` : ''}`)
  }, [query]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Movie Search</h1>

      {/* TODO: search input — update query state on change */}
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => {/* TODO */}}
        style={{ padding: '0.5rem', width: '300px', marginBottom: '1rem' }}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {/* TODO: render movie grid */}
      {/* TODO: on card click, fetch /movies/{id} and show detail */}

      {selected && (
        <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
          <h2>Detail view</h2>
          {/* TODO: render selected movie detail */}
          <pre>{JSON.stringify(selected, null, 2)}</pre>
          <button onClick={() => setSelected(null)}>Close</button>
        </div>
      )}
    </div>
  );
}
