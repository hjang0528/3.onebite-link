import Link from "next/link";
import FolderSelect from "@/components/folder-select";
import FormField from "@/components/form-field";
import SaveButton from "@/components/save-button";
import UrlInput from "@/components/url-input";
import type { Folder } from "@/lib/types";

export default function NewLinkForm({ folders }: { folders: Folder[] }) {
  return (
    <form className="flex flex-col gap-5 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <FormField
        label="링크 주소"
        htmlFor="link-url"
        hint="저장할 페이지의 주소를 붙여넣어 주세요."
      >
        <UrlInput id="link-url" />
      </FormField>

      <FormField
        label="폴더"
        htmlFor="link-folder"
        hint="나중에 다른 폴더로 옮길 수 있어요."
      >
        <FolderSelect id="link-folder" folders={folders} />
      </FormField>

      <div className="flex items-center justify-end gap-2 border-t border-zinc-100 pt-4 dark:border-zinc-800">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
        >
          취소
        </Link>
        <SaveButton />
      </div>
    </form>
  );
}
