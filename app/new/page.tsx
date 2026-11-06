import type { Metadata } from "next";
import NewLinkSection from "@/components/new-link-section";
import { folders } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "새 링크 | 한입 링크",
};

export default function NewLinkPage() {
  return <NewLinkSection folders={folders} />;
}
