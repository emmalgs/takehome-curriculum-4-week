import { useState, useEffect } from 'react';
const API = 'http://localhost:8000';
export default function App() {
  const [jobs, setJobs] = useState([]);
  const [type, setType] = useState('');
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    // TODO: fetch jobs with optional ?type= filter
  }, [type]);
  return (
    <div style={{padding:'2rem',fontFamily:'sans-serif'}}>
      <h1>Job Board</h1>
      {/* TODO: filter tabs: All | Full-time | Part-time | Contract */}
      {/* TODO: job cards list */}
      {/* TODO: detail modal on card click */}
      <pre>{JSON.stringify(jobs, null, 2)}</pre>
    </div>
  );
}
