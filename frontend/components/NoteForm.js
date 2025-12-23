import { useState, useEffect } from 'react';
import ColorPicker from './ColorPicker';

const EMPTY_NOTE = {
  title: '',
  content: '',
  color: '#ffffff',
  pinned: false,
};

export default function NoteForm({
  initialNote = EMPTY_NOTE,
  onSave,
  onCancel,
}) {
  const [title, setTitle] = useState(EMPTY_NOTE.title);
  const [content, setContent] = useState(EMPTY_NOTE.content);
  const [color, setColor] = useState(EMPTY_NOTE.color);
  const [pinned, setPinned] = useState(EMPTY_NOTE.pinned);

  useEffect(() => {
    setTitle(initialNote.title ?? '');
    setContent(initialNote.content ?? '');
    setColor(initialNote.color ?? '#ffffff');
    setPinned(initialNote.pinned ?? false);
  }, [initialNote]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      title: title.trim() || 'Untitled',
      content,
      color,
      pinned,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 p-4 rounded-xl transition-colors"
      style={{ backgroundColor: color }}
    >
      <input
        className="w-full p-3 rounded-lg border shadow-sm focus:ring-2 focus:ring-indigo-300 outline-none"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full p-3 rounded-lg border shadow-sm focus:ring-2 focus:ring-indigo-300 outline-none"
        rows="6"
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border">
        <ColorPicker value={color} onChange={setColor} />

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={pinned}
            onChange={(e) => setPinned(e.target.checked)}
          />
          Pinned
        </label>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition shadow"
        >
          Save
        </button>
      </div>
    </form>
  );
}
