import Link from "next/link";
import { PlusIcon } from "@/components/icons";

export default function NewLinkButton() {
  return (
    <Link
      href="/new"
      className="btn-primary inline-flex items-center gap-1 px-4 py-1.5 text-[14px] font-normal"
    >
      <PlusIcon className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">새 링크</span>
      <span className="sr-only sm:hidden">새 링크</span>
    </Link>
  );
}
