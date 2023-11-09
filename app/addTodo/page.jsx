"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setstatus] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !status) {
      alert("All fields are required !");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description , status }),
      });

      if (res.ok) {
        router.push("/");
        
      } else {
        throw new Error("Failed to create a todo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="todo Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="todo Description"
      />

      <input
        onChange={(e) => setstatus(e.target.value)}
        value={status}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Todo Status(Done / Pending / Remarks )"
      />
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add todo
      </button>
    </form>
  );
}
