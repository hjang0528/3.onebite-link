import FolderList from "@/components/folder-list";
import SidebarItem from "@/components/sidebar-item";
import { LayersIcon } from "@/components/icons";
import type { Folder } from "@/lib/types";

interface SidebarProps {
  folders: Folder[];
  totalCount: number;
}

export default function Sidebar({ folders, totalCount }: SidebarProps) {
  return (
    <aside className="shrink-0 border-b border-zinc-200 px-3 py-4 sm:w-60 sm:border-r sm:border-b-0 dark:border-zinc-800">
      <div className="flex flex-col gap-5 sm:sticky sm:top-18">
        <SidebarItem
          href="/"
          icon={<LayersIcon className="h-4 w-4" />}
          label="All"
          count={totalCount}
        />
        <FolderList folders={folders} />
      </div>
    </aside>
  );
}
