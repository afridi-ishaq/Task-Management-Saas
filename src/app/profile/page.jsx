export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold">
        Profile
      </h1>

      <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="space-y-4">
          <p>
            <strong>Name:</strong> Muhammad Ishaq
          </p>

          <p>
            <strong>Email:</strong> user@gmail.com
          </p>

          <p>
            <strong>Role:</strong> User
          </p>
        </div>
      </div>
    </div>
  );
}