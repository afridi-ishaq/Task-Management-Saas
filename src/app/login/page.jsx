"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Login Successful ✅");

        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.log(error);
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-white">
          Welcome Back
        </h1>

        <p className="text-slate-400 text-center mt-2">
          Login to your account
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
          />

          <button
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

          {message && (
            <p className="text-center text-sm text-green-400">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}