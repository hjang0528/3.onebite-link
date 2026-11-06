"use client";

import FolderNameDialog from "@/components/folder-name-dialog";
import { useFolderStore } from "@/components/folder-store";

export default function NewFolderModal() {
  const { isNewFolderOpen, closeNewFolder, addFolder } = useFolderStore();

  // 열릴 때마다 새로 마운트되므로 입력값이 항상 빈 상태로 시작한다.
  if (!isNewFolderOpen) return null;

  return (
    <FolderNameDialog
      title="새 폴더"
      submitLabel="저장"
      onSubmit={addFolder}
      onClose={closeNewFolder}
    />
  );
}
