"use client";

import { useState, useEffect } from "react";
import KanbanColumn from "@/components/KanbanColumn";
import CreateTaskModal from "@/components/CreateTaskModel";

export default function BoardPage() {
const [isModalOpen, setIsModalOpen] =
useState(false);

const [tasks, setTasks] = useState([]);

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

const moveTask = (id) => {
setTasks((prev) =>
prev.map((task) => {
if (task._id !== id)
return task;


    if (task.status === "todo") {
      return {
        ...task,
        status:
          "in-progress",
      };
    }

    if (
      task.status ===
      "in-progress"
    ) {
      return {
        ...task,
        status:
          "completed",
      };
    }

    return {
      ...task,
      status: "todo",
    };
  })
);


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
    />

    <KanbanColumn
      title="In Progress"
      tasks={tasks.filter(
        (task) =>
          task.status ===
          "in-progress"
      )}
      moveTask={moveTask}
    />

    <KanbanColumn
      title="Completed"
      tasks={tasks.filter(
        (task) =>
          task.status ===
          "completed"
      )}
      moveTask={moveTask}
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
