import MainSection from "@/components/main-section";
import { links } from "@/lib/mock-data";

export default function Home() {
  return <MainSection title="All" links={links} />;
}
