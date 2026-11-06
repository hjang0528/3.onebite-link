"use client";

import { useFolderStore } from "@/components/folder-store";

export default function FolderTitle({ folderId }: { folderId: string }) {
  const { folders } = useFolderStore();
  const folder = folders.find((item) => item.id === folderId);

  if (!folder) return <>폴더를 찾을 수 없어요</>;

  return (
    <>
      <span aria-hidden="true">{folder.emoji}</span> {folder.name}
    </>
  );
}
