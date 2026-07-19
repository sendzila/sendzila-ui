import { cx } from "../cx";

/* Four-state rule: every data surface renders exactly one of
   skeleton -> error -> empty -> data. Skeletons are LAYOUT-TRUE: same columns,
   same row heights as the data they stand in for, so arrival shifts nothing.
   aria-hidden + a polite live label. */

export function Skeleton({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return <span aria-hidden style={style} className={cx("skeleton inline-block", className)} />;
}

export function TableSkeleton({
  cols,
  rows = 8,
  loadingLabel = "Loading",
}: {
  cols: number;
  rows?: number;
  loadingLabel?: string;
}) {
  return (
    <div role="status" aria-label={loadingLabel}>
      <table className="w-full table-dense" aria-hidden>
        <tbody>
          {Array.from({ length: rows }, (_, row) => (
            <tr key={row}>
              {Array.from({ length: cols }, (_, col) => (
                <td key={col}>
                  <Skeleton
                    className="h-[13px]"
                    // Vary widths so the sheet reads as content, not stripes.
                    style={{ width: `${[85, 55, 70, 40, 60, 75][(row + col) % 6]}%` }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CardSkeleton({
  lines = 3,
  className = "",
  loadingLabel = "Loading",
}: {
  lines?: number;
  className?: string;
  loadingLabel?: string;
}) {
  return (
    <div role="status" aria-label={loadingLabel} className={cx("card p-4 space-y-2.5", className)}>
      {Array.from({ length: lines }, (_, index) => (
        <Skeleton
          key={index}
          className="h-[13px] block"
          style={{ width: `${[70, 92, 48, 80, 60][index % 5]}%` }}
        />
      ))}
    </div>
  );
}
