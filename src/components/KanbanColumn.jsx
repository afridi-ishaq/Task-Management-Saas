export default function KanbanColumn({
  title,
  tasks,
  moveTask,
  deleteTask,
}) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
            <h2 className="text-xl font-semibold mb-4">
                {title}
            </h2>

            <div className="space-y-3">
                {tasks.map((task) => (
                    <div
                        key={task._id}
                        className="bg-slate-800 p-4 rounded-lg"
                    >
                        <h3 className="font-medium">
                            {task.title}
                        </h3>

                        <p className="text-sm text-slate-400 mt-2">
                            {task.description}
                        </p>

                        <p className="text-sm text-slate-400 mt-2">
                            {task.description}
                        </p>

                        <button
                            onClick={() => moveTask(task._id)}
                            className="mt-4 bg-blue-600 px-3 py-2 rounded-lg text-sm"
                        >
                            Move Task
                        </button>
                    </div>

                ))}
            </div>
        </div>
    );
}