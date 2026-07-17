"use client";

import ProjectCard from "@/components/ProjectCard";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
    const [projects, setProjects] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);



    const deleteProject = async (id) => {
        try {
            const response = await fetch(
                `/api/projects/${id}`,
                {
                    method: "DELETE",
                }
            );

            const data = await response.json();

            if (data.success) {
                fetchProjects();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const fetchProjects = async () => {
        try {
            const response = await fetch("/api/projects");
            const data = await response.json();

            if (data.success) {
                setProjects(data.projects);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const createProject = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await fetch("/api/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    description,
                    userId: "REPLACE_WITH_REAL_USER_ID",
                }),
            });

            const data = await response.json();

            if (data.success) {
                setTitle("");
                setDescription("");
                fetchProjects();
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold">
                    Projects
                </h1>

                <form
                    onSubmit={createProject}
                    className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6"
                >
                    <input
                        type="text"
                        placeholder="Project Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 mb-4"
                    />

                    <textarea
                        placeholder="Project Description"
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                        className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 mb-4"
                        rows="4"
                    />

                    <button
                        disabled={loading}
                        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
                    >
                        {loading
                            ? "Creating..."
                            : "Create Project"}
                    </button>
                </form>

                <div className="grid md:grid-cols-2 gap-6 mt-10">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project._id}
                            project={project}
                            onDelete={deleteProject}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}