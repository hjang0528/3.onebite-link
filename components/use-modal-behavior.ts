"use client";

import { useEffect, type RefObject } from "react";

/**
 * 모달 공통 동작: 최초 포커스 이동, 배경 스크롤 잠금, Esc로 닫기.
 * 모달이 열려 있는 동안에만 마운트되는 컴포넌트에서 호출한다.
 */
export function useModalBehavior(
  onClose: () => void,
  initialFocusRef?: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    initialFocusRef?.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, initialFocusRef]);
}
