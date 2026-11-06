interface UrlInputProps {
  id: string;
  name?: string;
}

export default function UrlInput({ id, name = "url" }: UrlInputProps) {
  return (
    <input
      id={id}
      name={name}
      type="url"
      inputMode="url"
      autoComplete="url"
      placeholder="https://example.com"
      className="field w-full px-4 py-3 text-[17px] leading-[1.5]"
    />
  );
}
