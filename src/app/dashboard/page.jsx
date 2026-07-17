export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        
        {/* Sidebar */}
        <aside className="w-64 min-h-screen border-r border-slate-800 p-6">
          <h2 className="text-2xl font-bold text-blue-500">
            TaskFlow
          </h2>

          <nav className="mt-10 flex flex-col gap-4">
            <button className="text-left hover:text-blue-400">
              Dashboard
            </button>

            <button className="text-left hover:text-blue-400">
              Projects
            </button>

            <button className="text-left hover:text-blue-400">
              Tasks
            </button>

            <button className="text-left hover:text-blue-400">
              Settings
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Welcome to your workspace.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-slate-400">
                Total Projects
              </h3>

              <p className="text-4xl font-bold mt-4">
                12
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-slate-400">
                Total Tasks
              </h3>

              <p className="text-4xl font-bold mt-4">
                128
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-slate-400">
                Completed
              </h3>

              <p className="text-4xl font-bold mt-4">
                92
              </p>
            </div>
          </div>

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