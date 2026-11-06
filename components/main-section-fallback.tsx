export default function MainSectionFallback() {
  return (
    <main className="flex min-w-0 flex-1 flex-col gap-12">
      <div className="flex flex-col gap-2">
        <div className="h-11 w-48 rounded-lg bg-[var(--surface-hover)]" />
        <div className="h-5 w-20 rounded bg-[var(--surface-hover)]" />
      </div>
    </main>
  );
}
