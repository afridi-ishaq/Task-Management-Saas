export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold">
        Settings
      </h1>

      <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold">
          Profile Settings
        </h2>

        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
          />

          <button className="bg-blue-600 px-6 py-3 rounded-lg">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}