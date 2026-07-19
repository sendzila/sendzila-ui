import { cx } from "../cx";

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={cx(
        "h-8 rounded-[7px] bg-inset border border-edge px-2 text-[13px] text-ink",
        props.className,
      )}
    />
  );
}
