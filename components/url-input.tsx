import { LinkIcon } from "@/components/icons";

interface UrlInputProps {
  id: string;
  name?: string;
}

export default function UrlInput({ id, name = "url" }: UrlInputProps) {
  return (
    <div className="relative">
      <LinkIcon className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" />
      <input
        id={id}
        name={name}
        type="url"
        inputMode="url"
        autoComplete="url"
        placeholder="https://example.com"
        className="w-full rounded-lg border border-zinc-300 bg-white py-2.5 pr-3 pl-9 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500"
      />
    </div>
  );
}
