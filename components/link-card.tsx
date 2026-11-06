import FolderBadge from "@/components/folder-badge";
import { formatDate, getHostname } from "@/lib/utils";
import type { LinkItem } from "@/lib/types";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-hover flex w-full flex-col gap-3 p-6"
    >
      <span className="truncate text-[14px] leading-[1.4] text-[var(--text-sub)]">
        {getHostname(link.url)}
      </span>

      <h2 className="line-clamp-2 text-[17px] leading-[1.4] font-semibold tracking-[-0.2px]">
        {link.title}
      </h2>

      <p className="line-clamp-2 text-[14px] leading-[1.4] text-[var(--text-sub)]">
        {link.description}
      </p>

      <div className="mt-auto flex items-center gap-3 pt-3">
        <FolderBadge folderId={link.folderId} />
        <time
          dateTime={link.createdAt}
          className="ml-auto text-[14px] text-[var(--text-sub)]"
        >
          {formatDate(link.createdAt)}
        </time>
      </div>
    </a>
  );
}
