"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface SidebarItemProps {
  href: string;
  icon: ReactNode;
  label: string;
  count: number;
}

export default function SidebarItem({
  href,
  icon,
  label,
  count,
}: SidebarItemProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
        active
          ? "bg-indigo-50 font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
          : "font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
      }`}
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center text-base leading-none">
        {icon}
      </span>
      <span className="flex-1 truncate">{label}</span>
      <span
        className={`shrink-0 text-xs tabular-nums ${
          active
            ? "text-indigo-500 dark:text-indigo-400"
            : "text-zinc-400 dark:text-zinc-600"
        }`}
      >
        {count}
      </span>
    </Link>
  );
}
