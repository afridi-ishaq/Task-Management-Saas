import { NextResponse } from "next/server";
import mongoose from "mongoose";

import connectDB from "@/lib/mongodb";
import Project from "@/models/Project";

export async function GET() {
  try {
    await connectDB();

    const projects = await Project.find()
      .sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        projects,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("GET PROJECTS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch projects",
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();

    const { title, description, userId } =
      await request.json();

    if (!title || !userId) {
      return NextResponse.json(
        {
          success: false,
          message: "Title and userId are required",
        },
        { status: 400 }
      );
    }

    if (
      !mongoose.Types.ObjectId.isValid(userId)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid user id",
        },
        { status: 400 }
      );
    }

    const project = await Project.create({
      title,
      description: description || "",
      userId,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Project created successfully",
        project,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("CREATE PROJECT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create project",
      },
      { status: 500 }
    );
  }
}