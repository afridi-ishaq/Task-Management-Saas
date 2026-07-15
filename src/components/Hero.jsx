export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center">
        <span className="inline-block px-4 py-2 rounded-full border border-blue-500 text-blue-400 text-sm">
          🚀 The Ultimate Task Management Platform
        </span>

        <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
          Organize Work.
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
            Increase Productivity.
          </span>
        </h1>

        <p className="mt-8 text-slate-400 text-lg max-w-3xl mx-auto">
          Manage projects, assign tasks, track progress, and
          collaborate with your team using one powerful platform.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold">
            Start Free
          </button>

          <button className="border border-slate-700 px-8 py-4 rounded-xl font-semibold">
            Watch Demo
          </button>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="mt-20 max-w-5xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold text-blue-400">
                Total Taskss
              </h3>
              <p className="text-4xl font-bold mt-4">
                128
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold text-green-400">
                Completed
              </h3>
              <p className="text-4xl font-bold mt-4">
                92
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold text-yellow-400">
                In Progress
              </h3>
              <p className="text-4xl font-bold mt-4">
                36
              </p>
            </div>
          </div>

          <div className="mt-8 bg-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">
              Recent Tasks
            </h3>

            <div className="space-y-4">
              <div className="bg-slate-700 p-4 rounded-lg">
                Design Dashboard UI
              </div>

              <div className="bg-slate-700 p-4 rounded-lg">
                Create API Routes
              </div>

              <div className="bg-slate-700 p-4 rounded-lg">
                Connect MongoDB
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}