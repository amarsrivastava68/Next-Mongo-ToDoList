
import EditTodoForm from "@/components/EditTodoForm";
import React from "react";

const gettopicbyid = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("something went wwrong ");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
const editTodo = async ({ params }) => {
  const { id } = params;
 const {todo} = await gettopicbyid(id);
  console.log("id : ", id);
  const {  title , description , status} = todo
  return <EditTodoForm  id = {id} title = {title} status = {status} description = {description}/>;
};

export default editTodo;
