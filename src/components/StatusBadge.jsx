export default function StatusBadge({
  status,
}) {
  const styles = {
    todo: "bg-red-600",
    "in-progress": "bg-yellow-600",
    completed: "bg-green-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm ${styles[status]}`}
    >
      {status}
    </span>
  );
}