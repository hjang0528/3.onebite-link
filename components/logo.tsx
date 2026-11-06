import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-baseline gap-1.5 text-lg font-bold tracking-tight"
    >
      <span className="text-zinc-900 dark:text-zinc-50">한입</span>
      <span className="text-indigo-600 dark:text-indigo-400">링크</span>
      <span className="ml-0.5 hidden h-1.5 w-1.5 rounded-full bg-indigo-600 transition-transform group-hover:scale-125 sm:block dark:bg-indigo-400" />
    </Link>
  );
}
