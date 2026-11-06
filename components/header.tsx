import Logo from "@/components/logo";
import NewFolderButton from "@/components/new-folder-button";
import NewLinkButton from "@/components/new-link-button";

export default function Header() {
  return (
    <header className="nav-bar sticky top-0 z-20">
      <div className="mx-auto flex h-12 w-full max-w-[1080px] items-center justify-between px-6">
        <Logo />
        <div className="flex items-center gap-5">
          <NewFolderButton />
          <NewLinkButton />
        </div>
      </div>
    </header>
  );
}
