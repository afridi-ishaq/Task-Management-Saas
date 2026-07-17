import Sidebar from "@/components/Sidebar";
import LogoutButton from "@/components/LogoutButton";
import StatsCard from "@/components/StatsCard";
import TaskChart from "@/components/TaskChart";
import RecentActivity from "@/components/RecentActivity";


export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className=" pl-200">
            <LogoutButton />
          </div>

          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>



          <p className="text-slate-400 mt-2">
            Welcome to your workspace.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-10">
            <StatsCard
              title="Projects"
              value="12"
            />

            <StatsCard
              title="Tasks"
              value="128"
            />

            <StatsCard
              title="Completed"
              value="92"
            />

            <StatsCard
              title="Progress"
              value="72%"
            />
          </div>
          <div className="mt-10">
            <TaskChart />
          </div>
          
          <RecentActivity />

          {/* Recent Tasks */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-10">
            <h2 className="text-2xl font-semibold">
              Recent Tasks
            </h2>

            <div className="mt-6 space-y-4">
              <div className="bg-slate-800 p-4 rounded-lg">
                Design Dashboard UI
              </div>

              <div className="bg-slate-800 p-4 rounded-lg">
                Connect MongoDB
              </div>

              <div className="bg-slate-800 p-4 rounded-lg">
                Implement Authentication
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}