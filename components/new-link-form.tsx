import Link from "next/link";
import FolderSelect from "@/components/folder-select";
import FormField from "@/components/form-field";
import SaveButton from "@/components/save-button";
import UrlInput from "@/components/url-input";

export default function NewLinkForm() {
  return (
    <form className="card flex flex-col gap-8 p-6">
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
        <FolderSelect id="link-folder" />
      </FormField>

      <div className="flex items-center justify-end gap-5">
        <Link href="/" className="btn-text text-[17px] leading-[1.5]">
          취소
        </Link>
        <SaveButton />
      </div>
    </form>
  );
}
