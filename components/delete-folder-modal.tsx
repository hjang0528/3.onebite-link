"use client";

import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";
import { useFolderStore } from "@/components/folder-store";
import { useModalBehavior } from "@/components/use-modal-behavior";
import type { Folder } from "@/lib/types";

export default function DeleteFolderModal() {
  const { folderToDelete } = useFolderStore();

  // 열릴 때마다 새로 마운트되도록 분리한다.
  if (!folderToDelete) return null;

  return <DeleteFolderDialog folder={folderToDelete} />;
}

function DeleteFolderDialog({ folder }: { folder: Folder }) {
  const { cancelDeleteFolder, deleteFolder } = useFolderStore();
  const router = useRouter();
  const pathname = usePathname();
  const cancelRef = useRef<HTMLButtonElement>(null);

  // 파괴적인 동작이므로 최초 포커스는 '취소'에 둔다.
  useModalBehavior(cancelDeleteFolder, cancelRef);

  const handleDelete = () => {
    // 삭제한 폴더 페이지를 보고 있었다면 전체 목록으로 보낸다.
    if (pathname === `/folder/${folder.id}`) {
      router.replace("/");
    }

    deleteFolder(folder.id);
    cancelDeleteFolder();
  };

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-6"
      onClick={cancelDeleteFolder}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-folder-title"
        aria-describedby="delete-folder-description"
        className="modal-panel flex w-full max-w-[420px] flex-col gap-6 p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <h2
          id="delete-folder-title"
          className="text-[24px] leading-[1.2] font-semibold tracking-[-0.3px]"
        >
          폴더 삭제
        </h2>

        <p
          id="delete-folder-description"
          className="text-[17px] leading-[1.5] text-[var(--text-sub)]"
        >
          <span className="font-semibold text-[var(--text)]">{folder.name}</span>{" "}
          폴더를 삭제할까요? 삭제한 폴더는 되돌릴 수 없어요.
        </p>

        <div className="flex items-center justify-end gap-5">
          <button
            ref={cancelRef}
            type="button"
            onClick={cancelDeleteFolder}
            className="btn-text text-[17px] leading-[1.5]"
          >
            취소
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="btn-danger px-6 py-3 text-[17px] leading-[1.5]"
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
