import React from "react";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";

const TopicsList = () => {
  return (
    <>
      <div className="p-3 border border-slate-300  my-3  flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">Todo Title</h2>
          <h2>Todo Description</h2>
        </div>
        <div className="flex gap-2">
          <RemoveBtn />
          <Link href={"./editTodo/123"}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
        <div>
          <h3 className="font-bold red mx-6">Status</h3>
         <p>To Do Status </p>
        </div>
      </div>
    </>
  );
};

export default TopicsList;
