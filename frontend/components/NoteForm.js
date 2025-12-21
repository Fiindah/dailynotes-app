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
      <input 
        className="w-full p-3 rounded-lg border shadow-sm focus:ring-2 focus:ring-indigo-300 outline-none"
        placeholder="Title"
      />
      <textarea 
        className="w-full p-3 rounded-lg border shadow-sm focus:ring-2 focus:ring-indigo-300 outline-none"
        rows="6"
        placeholder="Write your note..."
      />
      <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg border">
        <input type="color" className="h-8 w-8 cursor-pointer" />
        <label className="flex items-center gap-2 text-sm">
          <input 
            type="checkbox" 
            className="h-4 w-4"
          /> 
          Pinned
        </label>
      </div>
      <div className="flex justify-end gap-3 pt-2">
      <button 
        type="button" 
        onClick={onClose} 
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

      {/* <input className="w-full p-2 rounded" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} /> */}
      {/* <textarea className="w-full p-2 rounded" rows="6" placeholder="Write your note..." value={content} onChange={e=>setContent(e.target.value)} /> */}
      {/* <div className="flex items-center gap-3">
        <input type="color" value={color} onChange={e=>setColor(e.target.value)} />
        <label className="flex items-center gap-2"><input type="checkbox" checked={pinned} onChange={e=>setPinned(e.target.checked)} /> Pinned</label>
      </div> */}
      {/* <div className="flex justify-end gap-2">
        <button type="button" onClick={onClose} className="px-3 py-1 rounded">Cancel</button>
        <button type="submit" className="px-4 py-1 rounded bg-indigo-600 text-white">Save</button>
      </div> */}
    </form>
  );
}
