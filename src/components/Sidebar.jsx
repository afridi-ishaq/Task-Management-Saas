import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-6">
            <h2 className="text-2xl font-bold text-blue-500">
                TaskFlow
            </h2>

            <nav className="mt-10 flex flex-col gap-4">
                <Link href="/dashboard">
                    Dashboard
                </Link>
                <Link href="/profile">
                    Profile
                </Link>

                <Link href="/projects">
                    Projects
                </Link>

                <Link href="/tasks">
                    Tasks
                </Link>

                <Link href="/board">
                    Board
                </Link>

                <Link href="/settings">
                    Settings
                </Link>
            </nav>
        </aside>
    );
}