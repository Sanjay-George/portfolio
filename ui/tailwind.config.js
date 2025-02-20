/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-purple-300",
    "bg-purple-400",
    "bg-purple-500",
    "bg-purple-600",
    "bg-purple-700",
    "bg-slate-300",
    "bg-slate-400",
    "bg-slate-500",
    "bg-slate-600",
    "bg-slate-700",
    "text-purple-300",
    "text-purple-400",
    "text-purple-500",
    "text-purple-600",
    "text-purple-700",
    "text-slate-300",
    "text-slate-400",
    "text-slate-500",
    "text-slate-600",
    "text-slate-700",
    "border-purple-300",
    "border-purple-400",
    "border-purple-500",
    "border-purple-600",
    "border-purple-700",
    "border-slate-300",
    "border-slate-400",
    "border-slate-500",
    "border-slate-600",
    "border-slate-700",
    "size-10",
    "size-8",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

