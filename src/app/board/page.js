"use client";

import { useState } from "react";
import KanbanColumn from "@/components/KanbanColumn";

export default function BoardPage() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design Homepage",
      description: "Create SaaS landing page",
      status: "todo",
    },
    {
      id: 2,
      title: "Connect MongoDB",
      description: "Setup database models",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Login System",
      description: "JWT Authentication",
      status: "completed",
    },
  ]);

  const moveTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;

        if (task.status === "todo") {
          return {
            ...task,
            status: "in-progress",
          };
        }

        if (task.status === "in-progress") {
          return {
            ...task,
            status: "completed",
          };
        }

        return {
          ...task,
          status: "todo",
        };
      })
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Kanban Board
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <KanbanColumn
          title="To Do"
          tasks={tasks.filter(
            (task) => task.status === "todo"
          )}
          moveTask={moveTask}
        />

        <KanbanColumn
          title="In Progress"
          tasks={tasks.filter(
            (task) =>
              task.status === "in-progress"
          )}
          moveTask={moveTask}
        />

        <KanbanColumn
          title="Completed"
          tasks={tasks.filter(
            (task) =>
              task.status === "completed"
          )}
          moveTask={moveTask}
        />
      </div>
    </div>
  );
}