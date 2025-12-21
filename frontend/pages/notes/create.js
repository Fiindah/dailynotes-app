import NoteForm from "../../components/NoteForm";
import { useRouter } from "next/router";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function CreateNote() {
  const router = useRouter();

  async function handleCreate(payload) {
    await fetch(`${API}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    router.push("/"); // kembali ke home
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50 flex justify-center">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-xl font-semibold mb-4">Create New Note</h1>

        <NoteForm
          initial={{}}
          onSave={handleCreate}
          onClose={() => router.back()}
        />
      </div>
    </div>
  );
}
