"use client"
import React, { useState, useEffect } from "react";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";

const TopicsList = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/todos", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("failed to fetch todos ");
      }

      const data = await res.json();
      setTodos(data.Todos);
    } catch (error) {
      console.log("error loading todos ", error);
    }
  };

  useEffect(() => {
    getTodos();
  }, [todos]); // Empty dependency array to fetch data when the component mounts

  return (
    <>
      {todos.map((todo) => (
        <div className="p-3 border border-slate-300  my-3  flex justify-between gap-5 items-start" key={todo._id}>
          <div>
            <h2 className="font-bold text-2xl">{todo.title}</h2>
            <h2>{todo.description}</h2>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={todo._id} />
            <Link href={`./editTodo/${todo._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
          <div>
            <h3 className="font-bold red mx-6 ">Status</h3>
            <p>{todo.status} </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
