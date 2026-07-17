import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Task from "@/models/Task";

export async function GET() {
  try {
    await connectDB();

    const tasks = await Task.find()
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      tasks,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch tasks",
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();

    const {
      title,
      description,
      projectId,
      userId,
      priority,
    } = await request.json();

    const task = await Task.create({
      title,
      description,
      projectId,
      userId,
      priority,
    });

    return NextResponse.json(
      {
        success: true,
        task,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create task",
      },
      { status: 500 }
    );
  }
}