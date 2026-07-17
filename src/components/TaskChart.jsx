"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Todo",
    tasks: 15,
  },
  {
    name: "Progress",
    tasks: 8,
  },
  {
    name: "Completed",
    tasks: 22,
  },
];

export default function TaskChart() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-6">
        Task Analytics
      </h2>

      <div className="h-80">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="tasks" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}