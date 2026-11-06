"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { PencilIcon, TrashIcon } from "@/components/icons";

interface SidebarItemProps {
  href: string;
  label: string;
  count: number;
  icon?: ReactNode;
  /** 넘기면 행 우측에 수정 버튼이 생기고, 마우스를 올렸을 때 나타난다. */
  onEdit?: () => void;
  editLabel?: string;
  /** 넘기면 행 우측에 삭제 버튼이 생기고, 마우스를 올렸을 때 나타난다. */
  onDelete?: () => void;
  deleteLabel?: string;
}

export default function SidebarItem({
  href,
  label,
  count,
  icon,
  onEdit,
  editLabel,
  onDelete,
  deleteLabel,
}: SidebarItemProps) {
  const pathname = usePathname();
  const active = pathname === href;

  // 링크 안에 버튼을 넣을 수 없으므로, 행을 래퍼로 두고 둘을 형제로 배치한다.
  return (
    <div
      className={`list-item flex w-full items-center pr-5 ${
        active ? "list-item-active" : ""
      }`}
    >
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className="flex min-w-0 flex-1 items-center gap-2.5 py-4 pl-5 text-[17px] leading-[1.5]"
      >
        {icon && (
          <span aria-hidden="true" className="shrink-0 text-[15px] leading-none">
            {icon}
          </span>
        )}
        <span className="min-w-0 flex-1 truncate">{label}</span>
        <span className="shrink-0 text-[14px] text-[var(--text-sub)] tabular-nums">
          {count}
        </span>
      </Link>

      {(onEdit || onDelete) && (
        <div className="ml-2.5 flex shrink-0 items-center gap-1">
          {onEdit && (
            <button
              type="button"
              onClick={onEdit}
              aria-label={editLabel ?? `${label} 수정`}
              className="row-action flex size-7 items-center justify-center"
            >
              <PencilIcon className="size-4" />
            </button>
          )}
          {onDelete && (
            <button
              type="button"
              onClick={onDelete}
              aria-label={deleteLabel ?? `${label} 삭제`}
              className="row-action row-action-danger flex size-7 items-center justify-center"
            >
              <TrashIcon className="size-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
