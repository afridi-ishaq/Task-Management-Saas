import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Task from "@/models/Task";

export async function PUT(
  request,
  { params }
) {
  try {
    await connectDB();

    const { status } =
      await request.json();

    const task =
      await Task.findByIdAndUpdate(
        params.id,
        {
          status,
        },
        {
          new: true,
        }
      );

    return NextResponse.json({
      success: true,
      task,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to update task",
      },
      {
        status: 500,
      }
    );
  }
}