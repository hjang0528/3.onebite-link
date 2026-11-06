import type { Folder } from "@/lib/types";

export const DEFAULT_FOLDER_EMOJI = "📁";

/**
 * 입력한 폴더 이름을 다듬는다.
 * 비어 있으면(공백만 입력 포함) null을 돌려준다.
 */
export function normalizeFolderName(name: string): string | null {
  const trimmed = name.trim();
  return trimmed ? trimmed : null;
}

/**
 * 폴더 이름으로 새 폴더를 만든다.
 * 이름이 비어 있으면(공백만 입력 포함) null을 돌려준다.
 */
export function createFolder(name: string): Folder | null {
  const normalized = normalizeFolderName(name);
  if (!normalized) return null;

  return {
    id: `folder-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    name: normalized,
    emoji: DEFAULT_FOLDER_EMOJI,
    count: 0,
  };
}
