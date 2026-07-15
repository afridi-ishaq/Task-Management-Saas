"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-500"
        >
          TaskFlow
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-slate-300 hover:text-white">
            Features
          </Link>

          <Link href="#pricing" className="text-slate-300 hover:text-white">
            Pricing
          </Link>

          <Link href="/login" className="text-slate-300 hover:text-white">
            Login
          </Link>

          <Link
            href="/register"
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
          <Link href="#features">Features</Link>

          <Link href="#pricing">Pricing</Link>

          <Link href="/login">Login</Link>

          <Link
            href="/register"
            className="bg-blue-600 px-4 py-2 rounded-lg text-center"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}