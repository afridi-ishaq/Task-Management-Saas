"use client";

import { useState } from "react";
import StatusBadge from "@/components/StatusBadge";

export default function TasksPage() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Build Dashboard",
            status: "todo",
        },
        {
            id: 2,
            title: "Connect MongoDB",
            status: "in-progress",
        },
    ]);

    const [title, setTitle] = useState("");

    const addTask = () => {
        if (!title) return;

        setTasks([
            {
                id: Date.now(),
                title,
                status: "todo",
            },
            ...tasks,
        ]);

        setTitle("");
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold">
                    Tasks
                </h1>

                <div className="flex gap-4 mt-8">
                    <input
                        type="text"
                        placeholder="Task title"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                        className="flex-1 p-3 rounded-lg bg-slate-800 border border-slate-700"
                    />

                    <button
                        onClick={addTask}
                        className="bg-blue-600 px-6 py-3 rounded-lg"
                    >
                        Add
                    </button>
                </div>

                <div className="mt-10 space-y-4">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className="bg-slate-800 p-4 rounded-lg"
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium">
                                    {task.title}
                                </h3>

                                <StatusBadge
                                    status={
                                        title === "To Do"
                                            ? "todo"
                                            : title === "In Progress"
                                                ? "in-progress"
                                                : "completed"
                                    }
                                />
                            </div>

                            <p className="text-sm text-slate-400 mt-2">
                                {task.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}