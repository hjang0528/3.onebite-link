"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useModalBehavior } from "@/components/use-modal-behavior";

interface FolderNameDialogProps {
  title: string;
  submitLabel: string;
  /** 비워두면 새 폴더, 값이 있으면 수정 모드로 동작한다. */
  initialName?: string;
  onSubmit: (name: string) => void;
  onClose: () => void;
}

/** 폴더 이름을 입력받는 모달. 새 폴더 만들기와 이름 수정이 함께 쓴다. */
export default function FolderNameDialog({
  title,
  submitLabel,
  initialName = "",
  onSubmit,
  onClose,
}: FolderNameDialogProps) {
  const [name, setName] = useState(initialName);
  const inputRef = useRef<HTMLInputElement>(null);
  const titleId = useId();
  const inputId = useId();

  useModalBehavior(onClose, inputRef);

  // 기존 이름은 바로 덮어쓸 수 있도록 전체 선택해 둔다.
  useEffect(() => {
    if (initialName) inputRef.current?.select();
  }, [initialName]);

  const canSubmit = name.trim().length > 0;

  const handleSubmit = () => {
    if (!canSubmit) return;
    onSubmit(name);
    onClose();
  };

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="modal-panel flex w-full max-w-[420px] flex-col gap-6 p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <h2
          id={titleId}
          className="text-[24px] leading-[1.2] font-semibold tracking-[-0.3px]"
        >
          {title}
        </h2>

        <div className="flex flex-col gap-2">
          <label
            htmlFor={inputId}
            className="text-[17px] leading-[1.5] font-semibold tracking-[-0.2px]"
          >
            폴더 이름
          </label>
          <input
            ref={inputRef}
            id={inputId}
            name="folderName"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") handleSubmit();
            }}
            placeholder="예) 읽을거리"
            className="field w-full px-4 py-3 text-[17px] leading-[1.5]"
          />
        </div>

        <div className="flex items-center justify-end gap-5">
          <button
            type="button"
            onClick={onClose}
            className="btn-text text-[17px] leading-[1.5]"
          >
            취소
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="btn-primary px-6 py-3 text-[17px] leading-[1.5]"
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
