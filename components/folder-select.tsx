import { ChevronDownIcon } from "@/components/icons";
import type { Folder } from "@/lib/types";

interface FolderSelectProps {
  id: string;
  folders: Folder[];
  name?: string;
}

export default function FolderSelect({
  id,
  folders,
  name = "folderId",
}: FolderSelectProps) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        defaultValue=""
        className="w-full appearance-none rounded-lg border border-zinc-300 bg-white py-2.5 pr-9 pl-3 text-sm text-zinc-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
      >
        <option value="">폴더 없음</option>
        {folders.map((folder) => (
          <option key={folder.id} value={folder.id}>
            {folder.emoji} {folder.name}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" />
    </div>
  );
}
