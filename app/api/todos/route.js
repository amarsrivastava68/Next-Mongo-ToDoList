import TopicsList from "@/components/TopicsList";
import connect from "@/libs/mongodb";
import Todo from "@/models/topics";
import { GET } from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description, status } = await request.json();
  await connect();
  await Todo.create({ title, description, status });
  return NextResponse.json({ message: "Todo Is Created " }, { status: "201" });
}

export async function GET() {
  await connect();
  const todos = await Todo.find();
  return NextResponse.json({ todos });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connect();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ message: "todo is deleted" }, { status: 200 });
}
