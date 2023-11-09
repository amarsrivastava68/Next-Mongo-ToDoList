"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function EditTodoForm({ id, title, description, status }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newStatus, setnewstatus] = useState(status);
  const router = useRouter();

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ newTitle, newDescription, newStatus }),
      });
      if (!res.ok) {
        throw new Error("could not update the todo ");
      }
     router.refresh()
    router.push('/')
    } catch (error) {
      console.log("Error occoured", error);
    }
  };
  return (
    <form onSubmit={handlesubmit}   className="flex flex-col gap-3">
      <h1 className="font-bold">Edit your To do</h1>
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        type="text"
        placeholder={newTitle}
        className="border border-slate-500 px-8 py-2"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        type="text"
        placeholder={newDescription}
        className="border border-slate-500 px-8 py-2"
      />
      <input
        onChange={(e) => setnewstatus(e.target.value)}
        type="text"
        placeholder={newStatus}
        className="border border-slate-500 px-8 py-2"
      />

      <button className="bg-green-500 font-bold  text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
}
