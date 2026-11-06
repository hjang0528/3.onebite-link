import { ExternalLinkIcon } from "@/components/icons";
import { formatDate, getHostname } from "@/lib/utils";
import type { Folder, LinkItem } from "@/lib/types";

interface LinkCardProps {
  link: LinkItem;
  folder?: Folder;
}

export default function LinkCard({ link, folder }: LinkCardProps) {
  const hostname = getHostname(link.url);

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 transition-colors hover:border-indigo-300 hover:bg-indigo-50/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-indigo-500/50 dark:hover:bg-indigo-500/5"
    >
      <div className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-zinc-100 text-[11px] font-bold text-zinc-500 uppercase dark:bg-zinc-800 dark:text-zinc-400"
        >
          {hostname.charAt(0)}
        </span>
        <span className="truncate text-xs text-zinc-500 dark:text-zinc-400">
          {hostname}
        </span>
        <ExternalLinkIcon className="ml-auto h-4 w-4 shrink-0 text-zinc-300 transition-colors group-hover:text-indigo-500 dark:text-zinc-600" />
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="line-clamp-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
          {link.title}
        </h3>
        <p className="line-clamp-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
          {link.description}
        </p>
      </div>

      <div className="mt-auto flex items-center gap-2 pt-1">
        {folder && (
          <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            <span aria-hidden="true">{folder.emoji}</span>
            {folder.name}
          </span>
        )}
        <time
          dateTime={link.createdAt}
          className="ml-auto text-[11px] text-zinc-400 dark:text-zinc-500"
        >
          {formatDate(link.createdAt)}
        </time>
      </div>
    </a>
  );
}
