import connect from "@/libs/mongodb";
import Todo from "@/models/todos";
import { NextResponse } from "next/server";
import { useRouter } from "next/router";
export async function PUT(request, { params }) {

  const { id } = params;
  const {
    newTitle: title,
    newDescription: description,
    newStatus: status,
  } = await request.json();

  await connect();
  await Todo.findByIdAndUpdate(id , { title, description, status });
  return NextResponse.json({ message: "todo is updated " }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connect();
  const todo = await Todo.findOne({ _id: id });
  return NextResponse.json({ todo }, { status: 200 });
}
