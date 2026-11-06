"use client";

import { useFolderStore } from "@/components/folder-store";

/**
 * 링크 카드에 붙는 폴더 뱃지.
 * 이름은 클라이언트 스토어가 소유하므로, 폴더 이름을 수정하면 뱃지도 함께 바뀐다.
 */
export default function FolderBadge({ folderId }: { folderId: string }) {
  const { folders } = useFolderStore();
  const folder = folders.find((item) => item.id === folderId);

  if (!folder) return null;

  return (
    <span className="badge inline-flex items-center gap-1 px-3 py-1 text-[13px]">
      <span aria-hidden="true">{folder.emoji}</span>
      {folder.name}
    </span>
  );
}
