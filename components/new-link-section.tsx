import NewLinkForm from "@/components/new-link-form";
import type { Folder } from "@/lib/types";

export default function NewLinkSection({ folders }: { folders: Folder[] }) {
  return (
    <main className="min-w-0 flex-1 px-4 py-6 sm:px-6">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            새 링크
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            저장할 링크 주소와 폴더를 선택해 주세요.
          </p>
        </div>
        <NewLinkForm folders={folders} />
      </div>
    </main>
  );
}
