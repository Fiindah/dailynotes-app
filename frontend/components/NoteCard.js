import { useRouter } from "next/router";

export default function NoteCard({ note, onEdit, onDelete }) {
  const router = useRouter();

  return (
    <div
      className="rounded-xl shadow-sm p-4 hover:shadow-md transition cursor-pointer"
      style={{ background: note.color || '#fff' }}
      onClick={() => router.push(`/notes/${note.id}`)}
    >
      {note.pinned && <span className="text-xs">📌</span>}
      <h3 className="font-semibold text-lg mb-2">{note.title || 'Untitled'}</h3>
      
      <p className="text-gray-700 mb-4 whitespace-pre-wrap">
        {note.content}
      </p>

    </div>
  );
}

