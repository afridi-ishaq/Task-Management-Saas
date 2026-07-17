"use client";

import { useState } from "react";

export default function CreateTaskModal({
  isOpen,
  onClose,
  onCreate,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    onCreate({
      id: Date.now(),
      title,
      description,
      status: "todo",
    });

    setTitle("");
    setDescription("");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-slate-900 p-6 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">
          Create Task
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
            rows="4"
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded-lg"
            >
              Create
            </button>

            <button
              type="button"
              onClick={onClose}
              className="bg-slate-700 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}