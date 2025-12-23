import { useRouter } from 'next/router';
import NoteForm from '../../components/NoteForm';

export default function CreateNote() {
  const router = useRouter();

  const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

  const handleCreate = async (note) => {
    await fetch(`${API}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });

    router.push("/");
  };


  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Buat Note</h1>
      <NoteForm
        onSave={handleCreate}
        onCancel={() => router.push('/')}
      />
    </div>
  );
}
