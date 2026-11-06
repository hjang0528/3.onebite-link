import type { Metadata } from "next";
import { FolderProvider } from "@/components/folder-store";
import DeleteFolderModal from "@/components/delete-folder-modal";
import EditFolderModal from "@/components/edit-folder-modal";
import Header from "@/components/header";
import NewFolderModal from "@/components/new-folder-modal";
import Sidebar from "@/components/sidebar";
import { folders, links } from "@/lib/mock-data";
import "./globals.css";

export const metadata: Metadata = {
  title: "한입 링크",
  description: "링크를 폴더로 정리하는 북마크 서비스",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <FolderProvider initialFolders={folders}>
          <Header />
          <div className="mx-auto flex w-full max-w-[1080px] flex-1 flex-col gap-12 px-6 pt-14 pb-24 sm:flex-row">
            <Sidebar totalCount={links.length} />
            {children}
          </div>
          {/* 헤더의 backdrop-filter가 fixed 요소의 기준 박스가 되므로 헤더 밖에서 렌더 */}
          <NewFolderModal />
          <EditFolderModal />
          <DeleteFolderModal />
        </FolderProvider>
      </body>
    </html>
  );
}
