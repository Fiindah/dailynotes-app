import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NoteCard from "../components/NoteCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const API =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function Home() {
  const router = useRouter();
  const [notes, setNotes] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchNotes() {
    try {
      setLoading(true);
      const res = await fetch(
        `${API}/notes?q=${encodeURIComponent(q)}`
      );
      const data = await res.json();
      setNotes(data);
    } catch (err) {
      console.error("Failed to fetch notes", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNotes();
  }, [q]);

  const handleDelete = async (id) => {
    if (!confirm("Hapus note ini?")) return;

    await fetch(`${API}/notes/${id}`, {
      method: "DELETE",
    });

    fetchNotes();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-gray-50 flex flex-col">
      <div className="max-w-6xl mx-auto px-4 py-6 flex-1">

        <Header
          q={q}
          setQ={setQ}
          onAdd={() => router.push("/notes/create")}
        />

        <main className="mt-6">
          {loading ? (
            <div className="text-center py-20 text-gray-500">
              Loading notes...
            </div>
          ) : notes.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p className="text-lg font-medium">
                Tidak ada catatan
              </p>
              <p className="text-sm mt-2">
                Klik <strong>Tambah Note</strong> untuk membuat
                catatan pertama.
              </p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
              {notes.map((n) => (
                <div
                  key={n.id}
                  className="break-inside-avoid mb-6 hover:scale-[1.01] transition-transform"
                >
                  <NoteCard
                    note={n}
                    onDelete={handleDelete}
                  />
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
