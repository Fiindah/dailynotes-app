import { useState, useEffect } from 'react';

export default function NoteForm({ initial = {}, onSave, onClose }) {
  const [title, setTitle] = useState(initial.title || '');
  const [content, setContent] = useState(initial.content || '');
  const [color, setColor] = useState(initial.color || '#fff');
  const [pinned, setPinned] = useState(initial.pinned || false);

  useEffect(() => {
    setTitle(initial.title || '');
    setContent(initial.content || '');
    setColor(initial.color || '#fff');
    setPinned(initial.pinned || false);
  }, [initial]);

  const submit = (e) => {
    e.preventDefault();
    onSave({ title, content, color, pinned });
  };

  return (
    <form onSubmit={submit} className="space-y-3">
      <input className="w-full p-2 rounded" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <textarea className="w-full p-2 rounded" rows="6" placeholder="Write your note..." value={content} onChange={e=>setContent(e.target.value)} />
      <div className="flex items-center gap-3">
        <input type="color" value={color} onChange={e=>setColor(e.target.value)} />
        <label className="flex items-center gap-2"><input type="checkbox" checked={pinned} onChange={e=>setPinned(e.target.checked)} /> Pinned</label>
      </div>
      <div className="flex justify-end gap-2">
        <button type="button" onClick={onClose} className="px-3 py-1 rounded">Cancel</button>
        <button type="submit" className="px-4 py-1 rounded bg-indigo-600 text-white">Save</button>
      </div>
    </form>
  );
}
