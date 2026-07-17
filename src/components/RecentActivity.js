export default function RecentActivity() {
  const activities = [
    "Created TaskFlow SaaS Project",
    "Added Authentication",
    "Connected MongoDB",
    "Created Tasks Module",
    "Updated Dashboard",
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-10">
      <h2 className="text-2xl font-semibold">
        Recent Activity
      </h2>

      <div className="mt-6 space-y-4">
        {activities.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 p-4 rounded-lg"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}