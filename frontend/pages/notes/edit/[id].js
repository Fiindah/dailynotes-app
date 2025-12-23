import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NoteForm from '../../../components/NoteForm';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function EditNote() {
  const router = useRouter();
  const { id } = router.query;

  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchNote = async () => {
      const res = await fetch(`${API}/notes/${id}`);
      const data = await res.json();
      setNote(data);
      setLoading(false);
    };

    fetchNote();
  }, [id]);

  const handleUpdate = async (updatedNote) => {
    await fetch(`${API}/notes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedNote),
    });

    router.push(`/notes/${id}`);
  };

  if (loading) return <p className="p-6">Loading...</p>;
  if (!note) return <p className="p-6 text-red-600">Note not found</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Note</h1>

      <NoteForm
        initialNote={note}
        onSave={handleUpdate}
        onCancel={() => router.back()}
      />
    </div>
  );
}
