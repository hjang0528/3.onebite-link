import NewLinkForm from "@/components/new-link-form";

export default function NewLinkSection() {
  return (
    <main className="min-w-0 flex-1">
      <div className="mx-auto flex w-full max-w-[680px] flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-[40px] leading-[1.1] font-semibold tracking-[-0.5px]">
            새 링크
          </h1>
          <p className="text-[14px] leading-[1.4] text-[var(--text-sub)]">
            저장할 링크 주소와 폴더를 선택해 주세요.
          </p>
        </div>
        <NewLinkForm />
      </div>
    </main>
  );
}
