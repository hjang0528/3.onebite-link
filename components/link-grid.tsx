import LinkCard from "@/components/link-card";
import type { Folder, LinkItem } from "@/lib/types";

interface LinkGridProps {
  links: LinkItem[];
  folders: Folder[];
}

export default function LinkGrid({ links, folders }: LinkGridProps) {
  if (links.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-zinc-300 px-6 py-16 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
        아직 저장된 링크가 없어요. 오른쪽 위 &lsquo;새 링크&rsquo; 버튼으로
        추가해 보세요.
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {links.map((link) => (
        <li key={link.id} className="flex">
          <LinkCard
            link={link}
            folder={folders.find((folder) => folder.id === link.folderId)}
          />
        </li>
      ))}
    </ul>
  );
}
