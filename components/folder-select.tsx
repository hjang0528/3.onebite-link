"use client";

import { ChevronDownIcon } from "@/components/icons";
import { useFolderStore } from "@/components/folder-store";

interface FolderSelectProps {
  id: string;
  name?: string;
}

export default function FolderSelect({
  id,
  name = "folderId",
}: FolderSelectProps) {
  const { folders } = useFolderStore();

  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        defaultValue=""
        className="field w-full appearance-none py-3 pr-11 pl-4 text-[17px] leading-[1.5]"
      >
        <option value="">폴더 없음</option>
        {folders.map((folder) => (
          <option key={folder.id} value={folder.id}>
            {folder.emoji} {folder.name}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-[var(--text-sub)]" />
    </div>
  );
}
