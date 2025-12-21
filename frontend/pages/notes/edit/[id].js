import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function EditNotePage() {
  const router = useRouter();
  const { id } = router.query;

  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchNote = async () => {
      const res = await fetch(`${API}/notes/${id}`);
      const data = await res.json();
      setNote(data);
      setTitle(data.title);
      setContent(data.content);
      setLoading(false);
    };

    fetchNote();
  }, [id]);

  const handleUpdate = async () => {
    await fetch(`${API}/notes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    router.push(`/notes/${id}`);
  };

  if (loading) return <p className="p-6">Loading...</p>;
  if (!note) return <p className="p-6 text-red-600">Note not found</p>;

    return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Note</h1>

      <div className="space-y-4">
        <input
          type="text"
          className="w-full p-3 border rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />

        <textarea
          className="w-full p-3 border rounded-lg h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content..."
        />

        <button
          onClick={handleUpdate}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  );


}


// "use client";

// import { useEffect, useState } from "react";
// import { useRouter, useParams } from "next/navigation";

// const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// export default function EditNotePage() {
//   const router = useRouter();
//   const { id } = useParams();

//   const [loading, setLoading] = useState(true);
//   const [note, setNote] = useState(null);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   // Fetch data note by id
//   useEffect(() => {
//     const fetchNote = async () => {
//       try {
//         const res = await fetch(`${API}/notes/${id}`);
//         const data = await res.json();

//         setNote(data);
//         setTitle(data.title);
//         setContent(data.content);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching note:", error);
//         setLoading(false);
//       }
//     };

//     fetchNote();
//   }, [id]);

//   // Update note
//   const handleUpdate = async () => {
//     try {
//       await fetch(`${API}/notes/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title, content }),
//       });

//       router.push(`/notes/${id}`);
//     } catch (error) {
//       console.error("Update failed:", error);
//     }
//   };

//   if (loading)
//     return (
//       <div className="p-6 text-center text-gray-500">Loading...</div>
//     );

//   if (!note)
//     return (
//       <div className="p-6 text-center text-red-600">
//         Note not found
//       </div>
//     );

//   return (
//     <div className="p-6 max-w-2xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Edit Note</h1>

//       <div className="space-y-4">
//         <input
//           type="text"
//           className="w-full p-3 border rounded-lg"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Title"
//         />

//         <textarea
//           className="w-full p-3 border rounded-lg h-40"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           placeholder="Content..."
//         />

//         <button
//           onClick={handleUpdate}
//           className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
//         >
//           Save Changes
//         </button>
//       </div>
//     </div>
//   );
// }
