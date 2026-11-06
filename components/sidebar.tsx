import FolderList from "@/components/folder-list";
import SidebarItem from "@/components/sidebar-item";

export default function Sidebar({ totalCount }: { totalCount: number }) {
  return (
    <aside className="shrink-0 sm:w-[240px]">
      <div className="flex flex-col gap-8 sm:sticky sm:top-20">
        <div className="card overflow-hidden">
          <SidebarItem href="/" label="All" count={totalCount} />
        </div>
        <FolderList />
      </div>
    </aside>
  );
}
