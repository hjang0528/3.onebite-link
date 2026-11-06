import SidebarItem from "@/components/sidebar-item";
import type { Folder } from "@/lib/types";

export default function FolderList({ folders }: { folders: Folder[] }) {
  return (
    <nav aria-label="폴더" className="flex flex-col gap-0.5">
      <h2 className="px-3 pb-1.5 text-xs font-semibold tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
        폴더
      </h2>
      {folders.map((folder) => (
        <SidebarItem
          key={folder.id}
          href={`/folder/${folder.id}`}
          icon={folder.emoji}
          label={folder.name}
          count={folder.count}
        />
      ))}
    </nav>
  );
}
