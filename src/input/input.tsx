import { cx } from "../cx";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cx(
        "h-8 w-full rounded-[7px] bg-inset border border-edge px-2.5 text-[13px] text-ink placeholder:text-ink-mute focus:border-edge-strong",
        props.className,
      )}
    />
  );
}
