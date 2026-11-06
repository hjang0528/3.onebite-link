"use client";

import { useFolderStore } from "@/components/folder-store";

export default function NewFolderButton() {
  const { openNewFolder } = useFolderStore();

  return (
    <button
      type="button"
      onClick={openNewFolder}
      className="btn-text text-[14px] leading-[1.4]"
    >
      새 폴더
    </button>
  );
}
