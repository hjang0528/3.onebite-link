export default function SaveButton({ label = "저장" }: { label?: string }) {
  return (
    <button
      type="button"
      className="btn-primary px-6 py-3 text-[17px] leading-[1.5]"
    >
      {label}
    </button>
  );
}
