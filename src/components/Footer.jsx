import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          
          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              TaskFlow
            </h2>

            <p className="mt-4 text-slate-400">
              Modern task management platform for individuals
              and teams.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Product
            </h3>

            <div className="flex flex-col gap-3 text-slate-400">
              <Link href="/">Features</Link>
              <Link href="/">Pricing</Link>
              <Link href="/">Updates</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-slate-400">
              <Link href="/">About</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Careers</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Support
            </h3>

            <div className="flex flex-col gap-3 text-slate-400">
              <Link href="/">Help Center</Link>
              <Link href="/">Contact</Link>
              <Link href="/">Privacy Policy</Link>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500">
          © {new Date().getFullYear()} TaskFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}