// frontend/pages/notes/[id].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DeleteModal from "../../components/DeleteModal";

export default function NoteDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function fetchNote() {
      try {
        const res = await fetch(`http://localhost:4000/notes/${id}`);
        const data = await res.json();

        setNote(data.data || data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:4000/notes/${id}`, {
        method: "DELETE",
      });
      router.push("/"); 
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  if (loading)
  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-2xl space-y-4">
        {/* Title skeleton */}
        <div className="h-8 w-3/4 rounded-lg bg-gray-200 animate-pulse"></div>

        {/* Body skeleton */}
        <div className="h-4 w-full rounded-lg bg-gray-200 animate-pulse"></div>
        <div className="h-4 w-5/6 rounded-lg bg-gray-200 animate-pulse"></div>
        <div className="h-4 w-4/6 rounded-lg bg-gray-200 animate-pulse"></div>
        <div className="h-4 w-full rounded-lg bg-gray-200 animate-pulse"></div>
        <div className="h-4 w-5/6 rounded-lg bg-gray-200 animate-pulse"></div>
        <div className="h-4 w-4/6 rounded-lg bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  );

  if (!note)
  return (
    <div className="p-6 flex flex-col items-center text-center">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Note Not Found</h2>
      <p className="text-gray-500 mb-4">Catatan yang kamu cari tidak ditemukan.</p>

      <a
        href="/"
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Kembali ke Beranda
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6"
      style={{ background: note.color || '#fff' }}
      >

        {/* Header */}
        <div className="flex justify-between items-center mb-4"
        
        >
          <button
            onClick={() => router.push(`/`)}
            className="text-indigo-600 hover:underline"
          >
            ← Back
          </button>

          <div className="space-x-3">
            <button
              onClick={() => router.push(`/notes/edit/${id}`)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Edit
            </button>

            <button
              onClick={() => setShowDeleteModal(true)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4 break-words">
          {note.title}
        </h1>

        {/* Content */}
        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
          {note.content}
        </p>

        {/* Date */}
        <p className="mt-6 text-gray-500 text-sm">
          Last updated: {new Date(note.updatedAt).toLocaleString()}
        </p>
      </div>

      {/* Modal Delete */}
      {showDeleteModal && (
        <DeleteModal
          onConfirm={handleDelete}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
}
