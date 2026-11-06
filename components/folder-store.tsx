"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { createFolder, normalizeFolderName } from "@/lib/folders";
import type { Folder } from "@/lib/types";

interface FolderStore {
  folders: Folder[];
  addFolder: (name: string) => void;
  renameFolder: (folderId: string, name: string) => void;
  deleteFolder: (folderId: string) => void;
  isNewFolderOpen: boolean;
  openNewFolder: () => void;
  closeNewFolder: () => void;
  /** 이름 수정 모달이 열려 있는 대상 폴더. 닫혀 있으면 null. */
  folderToEdit: Folder | null;
  requestEditFolder: (folder: Folder) => void;
  cancelEditFolder: () => void;
  /** 삭제 확인 모달이 열려 있는 대상 폴더. 닫혀 있으면 null. */
  folderToDelete: Folder | null;
  requestDeleteFolder: (folder: Folder) => void;
  cancelDeleteFolder: () => void;
}

const FolderContext = createContext<FolderStore | null>(null);

export function FolderProvider({
  initialFolders,
  children,
}: {
  initialFolders: Folder[];
  children: ReactNode;
}) {
  const [folders, setFolders] = useState(initialFolders);
  const [isNewFolderOpen, setIsNewFolderOpen] = useState(false);
  const [folderToEdit, setFolderToEdit] = useState<Folder | null>(null);
  const [folderToDelete, setFolderToDelete] = useState<Folder | null>(null);

  const addFolder = useCallback((name: string) => {
    const folder = createFolder(name);
    if (!folder) return;

    setFolders((prev) => [...prev, folder]);
  }, []);

  const renameFolder = useCallback((folderId: string, name: string) => {
    const normalized = normalizeFolderName(name);
    if (!normalized) return;

    setFolders((prev) =>
      prev.map((folder) =>
        folder.id === folderId ? { ...folder, name: normalized } : folder,
      ),
    );
  }, []);

  const deleteFolder = useCallback((folderId: string) => {
    setFolders((prev) => prev.filter((folder) => folder.id !== folderId));
  }, []);

  const openNewFolder = useCallback(() => setIsNewFolderOpen(true), []);
  const closeNewFolder = useCallback(() => setIsNewFolderOpen(false), []);

  const requestEditFolder = useCallback(
    (folder: Folder) => setFolderToEdit(folder),
    [],
  );
  const cancelEditFolder = useCallback(() => setFolderToEdit(null), []);

  const requestDeleteFolder = useCallback(
    (folder: Folder) => setFolderToDelete(folder),
    [],
  );
  const cancelDeleteFolder = useCallback(() => setFolderToDelete(null), []);

  const value = useMemo(
    () => ({
      folders,
      addFolder,
      renameFolder,
      deleteFolder,
      isNewFolderOpen,
      openNewFolder,
      closeNewFolder,
      folderToEdit,
      requestEditFolder,
      cancelEditFolder,
      folderToDelete,
      requestDeleteFolder,
      cancelDeleteFolder,
    }),
    [
      folders,
      addFolder,
      renameFolder,
      deleteFolder,
      isNewFolderOpen,
      openNewFolder,
      closeNewFolder,
      folderToEdit,
      requestEditFolder,
      cancelEditFolder,
      folderToDelete,
      requestDeleteFolder,
      cancelDeleteFolder,
    ],
  );

  return (
    <FolderContext.Provider value={value}>{children}</FolderContext.Provider>
  );
}

export function useFolderStore(): FolderStore {
  const store = useContext(FolderContext);
  if (!store) {
    throw new Error("useFolderStore는 FolderProvider 안에서만 사용할 수 있어요.");
  }
  return store;
}
