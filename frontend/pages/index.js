import { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';
import NoteForm from '../components/NoteForm';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [q, setQ] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState(null);

  async function fetchNotes() {
    const res = await fetch(`${API}/notes?q=${encodeURIComponent(q)}`);
    const data = await res.json();
    setNotes(data);
  }

  useEffect(() => { fetchNotes(); }, [q]);

  const handleCreate = async (payload) => {
    await fetch(`${API}/notes`, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload) });
    setOpenForm(false);
    fetchNotes();
  };

  const handleUpdate = async (payload) => {
    await fetch(`${API}/notes/${editing.id}`, { method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload) });
    setEditing(null);
    setOpenForm(false);
    fetchNotes();
  };

  const handleDelete = async (id) => {
    if (!confirm('Hapus note ini?')) return;
    await fetch(`${API}/notes/${id}`, { method: 'DELETE' });
    fetchNotes();
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">DailyNotes</h1>
          <div className="flex gap-2">
            <input className="px-3 py-2 rounded border" placeholder="Search notes..." value={q} onChange={e=>setQ(e.target.value)} />
            <button onClick={()=>{ setEditing(null); setOpenForm(true); }} className="px-4 py-2 rounded bg-indigo-600 text-white">Add Notes</button>
          </div>
        </header>

        <main>
          {openForm && (
            <div className="mb-6 p-4 border rounded bg-white">
              <NoteForm
                initial={editing || {}}
                onSave={editing ? handleUpdate : handleCreate}
                onClose={() => { setOpenForm(false); setEditing(null); }}
              />
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {notes.map(n => (
              <NoteCard
                key={n.id}
                note={n}
                onEdit={(note) => { setEditing(note); setOpenForm(true); }}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
