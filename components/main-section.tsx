import LinkGrid from "@/components/link-grid";
import type { ReactNode } from "react";
import type { LinkItem } from "@/lib/types";

interface MainSectionProps {
  title: ReactNode;
  links: LinkItem[];
}

export default function MainSection({ title, links }: MainSectionProps) {
  return (
    <main className="flex min-w-0 flex-1 flex-col gap-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-[40px] leading-[1.1] font-semibold tracking-[-0.5px]">
          {title}
        </h1>
        <p className="text-[14px] leading-[1.4] text-[var(--text-sub)]">
          링크 {links.length}개
        </p>
      </div>
      <LinkGrid links={links} />
    </main>
  );
}
