import React from "react";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";

const getTodos = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/todos", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch todos ");
    }

    return  res.json();
  } catch (error) {
    console.log("error loading todos ", error);
  }
};
export default async function TopicsList() {
  const { Todos : todos } = await getTodos();
  
  return (
    <>
      {todos.map((todo) => (
        <div className="p-3 border border-slate-300  my-3  flex justify-between gap-5 items-start">
          <div>
            <h2 className="font-bold text-2xl">{todo.title}</h2>
            <h2>{todo.description}</h2>
          </div>
          <div className="flex gap-2">
            <RemoveBtn  id ={todo._id}/>
            <Link href={`./editTodo/${todo._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
          <div>
            <h3 className="font-bold red mx-6">Status</h3>
            <p>{todo.status} </p>
          </div>
        </div>
      ))}
    </>
  );
}
