import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function NoteDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [note, setNote] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`${API}/notes/${id}`).then(r=>r.json()).then(setNote);
  }, [id]);

  if (!note) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow" style={{ background: note.color }}>
        <h1 className="text-2xl font-semibold">{note.title}</h1>
        <p className="mt-4 whitespace-pre-wrap">{note.content}</p>
      </div>
    </div>
  );
}
