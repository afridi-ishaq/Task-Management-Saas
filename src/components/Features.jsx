import {
  FolderKanban,
  Users,
  BarChart3,
  CheckCircle,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <FolderKanban size={40} />,
      title: "Project Management",
      description:
        "Create and organize projects with an intuitive workspace.",
    },
    {
      icon: <Users size={40} />,
      title: "Team Collaboration",
      description:
        "Invite team members and work together in real time.",
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Analytics Dashboard",
      description:
        "Track productivity and monitor project performance.",
    },
    {
      icon: <CheckCircle size={40} />,
      title: "Task Tracking",
      description:
        "Manage tasks with status updates and priorities.",
    },
  ];

  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Everything You Need
        </h2>

        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Powerful tools designed to help individuals and teams
          stay productive and organized.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition-all"
          >
            <div className="text-blue-500 mb-6">
              {feature.icon}
            </div>

            <h3 className="text-xl font-semibold mb-4">
              {feature.title}
            </h3>

            <p className="text-slate-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}