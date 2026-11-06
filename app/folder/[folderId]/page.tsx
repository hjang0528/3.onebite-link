import type { Metadata } from "next";
import { Suspense } from "react";
import FolderTitle from "@/components/folder-title";
import MainSection from "@/components/main-section";
import MainSectionFallback from "@/components/main-section-fallback";
import {
  folders,
  getFolderById,
  getLinksByFolderId,
} from "@/lib/mock-data";

export function generateStaticParams() {
  return folders.map((folder) => ({ folderId: folder.id }));
}

export async function generateMetadata(
  props: PageProps<"/folder/[folderId]">,
): Promise<Metadata> {
  const { folderId } = await props.params;
  const folder = getFolderById(folderId);

  return {
    title: folder ? `${folder.name} | 한입 링크` : "한입 링크",
  };
}

// params 접근을 Suspense 경계 안으로 넣어야 한다.
// cacheComponents가 켜져 있으면 경계 밖에서 params를 읽을 때 Next가 에러를 던진다.
export default function FolderPage(props: PageProps<"/folder/[folderId]">) {
  return (
    <Suspense fallback={<MainSectionFallback />}>
      <FolderContent params={props.params} />
    </Suspense>
  );
}

async function FolderContent({
  params,
}: {
  params: PageProps<"/folder/[folderId]">["params"];
}) {
  const { folderId } = await params;

  // 폴더 이름은 클라이언트 스토어가 소유한다(세션 중 추가된 폴더 포함).
  // 링크는 서버의 목업 데이터에서 가져오므로, 새 폴더는 자연히 0개로 표시된다.
  return (
    <MainSection
      title={<FolderTitle folderId={folderId} />}
      links={getLinksByFolderId(folderId)}
      folders={folders}
    />
  );
}
