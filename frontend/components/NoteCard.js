export default function NoteCard({ note, onEdit, onDelete }) {
  return (
    <div className="p-4 rounded-2xl shadow-sm min-h-[120px] flex flex-col justify-between"
         style={{ background: note.color || '#fff' }}>
      <div>
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg">{note.title || 'Untitled'}</h3>
          {note.pinned && <span className="text-xs">📌</span>}
        </div>
        <p className="mt-2 text-sm whitespace-pre-wrap">{note.content}</p>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button onClick={() => onEdit(note)} className="text-sm px-2 py-1 rounded hover:bg-black/5">Edit</button>
        <button onClick={() => onDelete(note.id)} className="text-sm px-2 py-1 rounded hover:bg-red-100 text-red-600">Delete</button>
      </div>
    </div>
  );
}
