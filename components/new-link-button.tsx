import Link from "next/link";
import { PlusIcon } from "@/components/icons";

export default function NewLinkButton() {
  return (
    <Link
      href="/new"
      className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:px-4"
    >
      <PlusIcon className="h-4 w-4" />
      <span className="hidden sm:inline">새 링크</span>
      <span className="sr-only sm:hidden">새 링크</span>
    </Link>
  );
}
