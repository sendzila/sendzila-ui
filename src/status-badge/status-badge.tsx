import { cx } from "../cx";

const STATUS_STYLES: Record<string, string> = {
  sent: "text-ok bg-ok-dim",
  delivered: "text-ok bg-ok-dim",
  queued: "text-neutral bg-neutral-dim",
  sending: "text-info bg-info-dim",
  bounced: "text-bad bg-bad-dim",
  failed: "text-bad bg-bad-dim",
  complained: "text-grape bg-grape-dim",
  suppressed: "text-warn bg-warn-dim",
  verified: "text-ok bg-ok-dim",
  pending: "text-warn bg-warn-dim",
  live: "text-ok bg-ok-dim",
  test: "text-info bg-info-dim",
};

export function StatusBadge({ value }: { value: string }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium lowercase",
        STATUS_STYLES[value] ?? "text-neutral bg-neutral-dim",
      )}
    >
      {value}
    </span>
  );
}
