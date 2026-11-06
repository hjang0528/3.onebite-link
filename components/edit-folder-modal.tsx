"use client";

import FolderNameDialog from "@/components/folder-name-dialog";
import { useFolderStore } from "@/components/folder-store";

export default function EditFolderModal() {
  const { folderToEdit, cancelEditFolder, renameFolder } = useFolderStore();

  // 열릴 때마다 새로 마운트되므로 입력값이 항상 현재 이름으로 시작한다.
  if (!folderToEdit) return null;

  return (
    <FolderNameDialog
      title="폴더 이름 수정"
      submitLabel="저장"
      initialName={folderToEdit.name}
      onSubmit={(name) => renameFolder(folderToEdit.id, name)}
      onClose={cancelEditFolder}
    />
  );
}
