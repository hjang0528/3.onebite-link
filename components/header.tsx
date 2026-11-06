import Logo from "@/components/logo";
import NewLinkButton from "@/components/new-link-button";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/85 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/85">
      <div className="flex h-14 items-center justify-between px-4 sm:px-6">
        <Logo />
        <NewLinkButton />
      </div>
    </header>
  );
}
