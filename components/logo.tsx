import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-[17px] font-semibold tracking-[-0.2px] text-[var(--text)]"
    >
      한입 링크
    </Link>
  );
}
