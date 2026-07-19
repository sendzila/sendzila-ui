import { cx } from "../cx";

export function Button({
  kind = "default",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: "primary" | "default" | "danger" | "ghost";
}) {
  const kinds = {
    primary:
      "bg-brand text-brand-ink font-medium hover:bg-brand-hover active:translate-y-px border border-transparent",
    default: "bg-overlay border border-edge hover:border-edge-strong text-ink",
    danger: "bg-bad-dim border border-bad/25 text-bad hover:border-bad/60",
    ghost: "text-ink-dim hover:text-ink hover:bg-overlay border border-transparent",
  };
  return (
    <button
      className={cx(
        "inline-flex items-center gap-1.5 rounded-[7px] px-3 h-8 text-[13px] transition-colors disabled:opacity-40 disabled:pointer-events-none select-none",
        kinds[kind],
        className,
      )}
      {...props}
    />
  );
}
