import LinkGrid from "@/components/link-grid";
import type { Folder, LinkItem } from "@/lib/types";

interface MainSectionProps {
  title: string;
  links: LinkItem[];
  folders: Folder[];
}

export default function MainSection({
  title,
  links,
  folders,
}: MainSectionProps) {
  return (
    <main className="min-w-0 flex-1 px-4 py-6 sm:px-6">
      <div className="mb-5 flex items-end justify-between gap-4">
        <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h1>
        <p className="shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
          링크 {links.length}개
        </p>
      </div>
      <LinkGrid links={links} folders={folders} />
    </main>
  );
}
