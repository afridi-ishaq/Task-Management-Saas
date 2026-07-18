"use client";

import { useState, useEffect } from "react";
import KanbanColumn from "@/components/KanbanColumn";
import CreateTaskModal from "@/components/CreateTaskModel";

export default function BoardPage() {
const [isModalOpen, setIsModalOpen] =
useState(false);

const [tasks, setTasks] = useState([]);

const deleteTask = async (id) => {
  try {
    const response =
      await fetch(
        `/api/tasks/${id}`,
        {
          method: "DELETE",
        }
      );

    const data =
      await response.json();

    if (data.success) {
      fetchTasks();
    }
  } catch (error) {
    console.log(error);
  }
};

const fetchTasks = async () => {
try {
const response = await fetch(
"/api/tasks"
);


  const data =
    await response.json();

  if (data.success) {
    setTasks(data.tasks);
  }
} catch (error) {
  console.log(error);
}


};

useEffect(() => {
fetchTasks();
}, []);

const createTask = async (
newTask
) => {
try {
const response =
await fetch("/api/tasks", {
method: "POST",
headers: {
"Content-Type":
"application/json",
},
body: JSON.stringify({
title: newTask.title,
description:
newTask.description,
priority: "medium",
}),
});


  const data =
    await response.json();

  if (data.success) {
    fetchTasks();
  }
} catch (error) {
  console.log(error);
}


};

const moveTask = async (id) => {
  try {
    const currentTask =
      tasks.find(
        (task) =>
          task._id === id
      );

    if (!currentTask) return;

    let newStatus = "todo";

    if (
      currentTask.status ===
      "todo"
    ) {
      newStatus =
        "in-progress";
    } else if (
      currentTask.status ===
      "in-progress"
    ) {
      newStatus =
        "completed";
    }

    const response =
      await fetch(
        `/api/tasks/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );

    const data =
      await response.json();

    if (data.success) {
      fetchTasks();
    }
  } catch (error) {
    console.log(error);
  }
};

return ( <div className="min-h-screen bg-slate-950 text-white p-8"> <div className="flex justify-between items-center mb-8"> <h1 className="text-4xl font-bold">
Kanban Board </h1>


    <button
      onClick={() =>
        setIsModalOpen(true)
      }
      className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg"
    >
      New Task
    </button>
    <button
  onClick={() =>
    deleteTask(task._id)
  }
  className="mt-2 bg-red-600 px-3 py-2 rounded-lg text-sm w-full"
>
  Delete
</button>
  </div>

  <div className="grid md:grid-cols-3 gap-6">
    <KanbanColumn
      title="To Do"
      tasks={tasks.filter(
        (task) =>
          task.status ===
          "todo"
      )}
      moveTask={moveTask}
      deleteTask={deleteTask}
    />

    <KanbanColumn
      title="In Progress"
      tasks={tasks.filter(
        (task) =>
          task.status ===
          "in-progress"
      )}
      moveTask={moveTask}
      deleteTask={deleteTask}
    />

    <KanbanColumn
      title="Completed"
      tasks={tasks.filter(
        (task) =>
          task.status ===
          "completed"
      )}
      moveTask={moveTask}
      deleteTask={deleteTask}
    />
  </div>

  <CreateTaskModal
    isOpen={isModalOpen}
    onClose={() =>
      setIsModalOpen(false)
    }
    onCreate={createTask}
  />
</div>


);
}
