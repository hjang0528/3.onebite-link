import type { Folder, LinkItem } from "@/lib/types";

export const folders: Folder[] = [
  { id: "dev", name: "개발", emoji: "💻", count: 4 },
  { id: "design", name: "디자인", emoji: "🎨", count: 2 },
  { id: "reading", name: "읽을거리", emoji: "📚", count: 2 },
  { id: "tools", name: "유용한 도구", emoji: "🛠️", count: 1 },
  { id: "inspiration", name: "영감", emoji: "✨", count: 0 },
];

export const links: LinkItem[] = [
  {
    id: "1",
    title: "Next.js 공식 문서",
    description:
      "App Router, 서버 컴포넌트, 캐싱까지 Next.js의 모든 기능을 다루는 공식 가이드.",
    url: "https://nextjs.org/docs",
    folderId: "dev",
    createdAt: "2026-11-02",
  },
  {
    id: "2",
    title: "React 공식 문서 — 배우기",
    description: "훅, 상태 관리, 컴포넌트 설계를 예제와 함께 처음부터 익히기.",
    url: "https://react.dev/learn",
    folderId: "dev",
    createdAt: "2026-10-30",
  },
  {
    id: "3",
    title: "Tailwind CSS v4 릴리즈 노트",
    description: "새로운 엔진과 CSS 우선 설정 방식에 대한 변경 사항 정리.",
    url: "https://tailwindcss.com/blog",
    folderId: "dev",
    createdAt: "2026-10-28",
  },
  {
    id: "4",
    title: "TypeScript 핸드북",
    description: "제네릭과 유틸리티 타입을 실전 예제로 정리한 공식 핸드북.",
    url: "https://www.typescriptlang.org/docs/handbook",
    folderId: "dev",
    createdAt: "2026-10-21",
  },
  {
    id: "5",
    title: "Refactoring UI",
    description: "개발자를 위한 인터페이스 디자인 규칙 모음. 여백과 위계의 기본.",
    url: "https://www.refactoringui.com",
    folderId: "design",
    createdAt: "2026-10-18",
  },
  {
    id: "6",
    title: "Figma 디자인 시스템 가이드",
    description: "컴포넌트와 변수로 확장 가능한 디자인 시스템 만들기.",
    url: "https://www.figma.com/best-practices",
    folderId: "design",
    createdAt: "2026-10-11",
  },
  {
    id: "7",
    title: "느리게 읽기의 힘",
    description: "정보 과잉 시대에 깊게 읽는 습관을 되찾는 방법에 대한 에세이.",
    url: "https://www.newyorker.com/culture",
    folderId: "reading",
    createdAt: "2026-10-09",
  },
  {
    id: "8",
    title: "좋은 개발자의 글쓰기",
    description: "문서와 커밋 메시지를 읽기 좋게 쓰는 아주 구체적인 조언들.",
    url: "https://www.writethedocs.org",
    folderId: "reading",
    createdAt: "2026-09-27",
  },
  {
    id: "9",
    title: "Excalidraw",
    description: "손그림 느낌으로 아키텍처 다이어그램을 빠르게 그릴 수 있는 도구.",
    url: "https://excalidraw.com",
    folderId: "tools",
    createdAt: "2026-09-20",
  },
];

export function getFolderById(folderId: string): Folder | undefined {
  return folders.find((folder) => folder.id === folderId);
}

export function getLinksByFolderId(folderId: string): LinkItem[] {
  return links.filter((link) => link.folderId === folderId);
}
