import { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import NoteForm from '../components/NoteForm';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [q, setQ] = useState('');
  // const [openForm, setOpenForm] = useState(false);
  // const [editing, setEditing] = useState(null);

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
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-gray-50">
    <div className="max-w-6xl mx-auto px-4 py-6">

      <Header
        q={q}
        setQ={setQ}
        onAdd={() => router.push("/notes/create")}

        
      />

      <main className="mt-6">

        {/* Masonry layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
          {notes.map(n => (
            <div 
              key={n.id} 
              className="break-inside-avoid mb-6 hover:scale-[1.01] transition-transform"
            >
              <NoteCard
                note={n}
                onEdit={(note) => { setEditing(note); setOpenForm(true); }}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />

    </div>
  </div>
);

}
