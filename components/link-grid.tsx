import LinkCard from "@/components/link-card";
import type { Folder, LinkItem } from "@/lib/types";

interface LinkGridProps {
  links: LinkItem[];
  folders: Folder[];
}

export default function LinkGrid({ links, folders }: LinkGridProps) {
  if (links.length === 0) {
    return (
      <div className="card px-6 py-16 text-center">
        <p className="text-[17px] leading-[1.5] text-[var(--text-sub)]">
          아직 저장된 링크가 없어요.
          <br />
          오른쪽 위 &lsquo;새 링크&rsquo; 버튼으로 추가해 보세요.
        </p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {links.map((link) => (
        <li key={link.id} className="flex">
          <LinkCard
            link={link}
            folder={folders.find((folder) => folder.id === link.folderId)}
          />
        </li>
      ))}
    </ul>
  );
}
