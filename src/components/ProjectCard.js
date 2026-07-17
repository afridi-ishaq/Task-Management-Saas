export default function ProjectCard({
  project,
  onDelete,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-2xl font-semibold">
        {project.title}
      </h2>

      <p className="text-slate-400 mt-3">
        {project.description}
      </p>

      <div className="flex gap-3 mt-6">
        <button className="bg-yellow-600 px-4 py-2 rounded-lg">
          Edit
        </button>

        <button
          onClick={() => onDelete(project._id)}
          className="bg-red-600 px-4 py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
}