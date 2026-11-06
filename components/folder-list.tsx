"use client";

import SidebarItem from "@/components/sidebar-item";
import { useFolderStore } from "@/components/folder-store";

export default function FolderList() {
  const { folders, requestEditFolder, requestDeleteFolder } = useFolderStore();

  if (folders.length === 0) return null;

  return (
    <section className="flex flex-col gap-3">
      <h2 className="px-1 text-[14px] leading-[1.4] text-[var(--text-sub)]">
        폴더
      </h2>
      <nav aria-label="폴더" className="card flex flex-col overflow-hidden">
        {folders.map((folder) => (
          <SidebarItem
            key={folder.id}
            href={`/folder/${folder.id}`}
            icon={folder.emoji}
            label={folder.name}
            count={folder.count}
            onEdit={() => requestEditFolder(folder)}
            editLabel={`${folder.name} 폴더 이름 수정`}
            onDelete={() => requestDeleteFolder(folder)}
            deleteLabel={`${folder.name} 폴더 삭제`}
          />
        ))}
      </nav>
    </section>
  );
}
