import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MainSection from "@/components/main-section";
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

export default async function FolderPage(
  props: PageProps<"/folder/[folderId]">,
) {
  const { folderId } = await props.params;
  const folder = getFolderById(folderId);

  if (!folder) {
    notFound();
  }

  return (
    <MainSection
      title={`${folder.emoji} ${folder.name}`}
      links={getLinksByFolderId(folder.id)}
      folders={folders}
    />
  );
}
