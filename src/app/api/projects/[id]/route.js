import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Project from "@/models/Project";

export async function GET(request, { params }) {
  try {
    await connectDB();

    const project = await Project.findById(
      params.id
    );

    if (!project) {
      return NextResponse.json(
        {
          success: false,
          message: "Project not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      project,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();

    const { title, description } =
      await request.json();

    const project =
      await Project.findByIdAndUpdate(
        params.id,
        {
          title,
          description,
        },
        {
          new: true,
        }
      );

    return NextResponse.json({
      success: true,
      project,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Update failed",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request,
  { params }
) {
  try {
    await connectDB();

    await Project.findByIdAndDelete(
      params.id
    );

    return NextResponse.json({
      success: true,
      message: "Project deleted",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Delete failed",
      },
      { status: 500 }
    );
  }
}