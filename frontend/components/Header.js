import { useState } from "react";

export default function Header({ q, setQ, onAdd }) {
  const [mobileSearch, setMobileSearch] = useState(false);

  return (
    <header className="w-full mb-6">
      {/* Wrapper */}
      <div className="flex items-center justify-between gap-3 bg-white p-4 rounded-xl shadow-sm border">

        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-indigo-700">
          DailyNotes
        </h1>

        {/* Search (desktop) */}
        <div className="hidden sm:flex flex-1 max-w-md">
          <input
            className="w-full px-4 py-2 rounded-lg border shadow-sm focus:ring-2 focus:ring-indigo-300"
            placeholder="Search notes..."
            value={q}
            onChange={e => setQ(e.target.value)}
          />
        </div>

        {/* Tombol Add */}
        <button
          onClick={onAdd}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
        >
          Add
        </button>

        {/* Search icon (mobile only) */}
        <button
          className="sm:hidden p-2 rounded-lg border"
          onClick={() => setMobileSearch(!mobileSearch)}
        >
          🔍
        </button>
      </div>

      {/* Search bar for mobile */}
      {mobileSearch && (
        <div className="mt-3 sm:hidden">
          <input
            className="w-full px-4 py-2 rounded-lg border shadow-sm focus:ring-2 focus:ring-indigo-300"
            placeholder="Search notes..."
            value={q}
            onChange={e => setQ(e.target.value)}
          />
        </div>
      )}
    </header>
  );
}
