import type { ReactNode } from "react";

import { cx } from "../cx";

/* Tabs idiom: title above, underline tab row, accent underline on active, one
   full-width hairline under the row. Proper tablist semantics. */

export function Tabs<T extends string>({
  tabs,
  active,
  onChange,
  label,
  idPrefix,
}: {
  tabs: { id: T; label: () => string }[];
  active: T;
  onChange: (tab: T) => void;
  label: string;
  idPrefix: string;
}) {
  return (
    <div role="tablist" aria-label={label} className="flex gap-1 border-b border-edge mb-5">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          id={`${idPrefix}-tab-${tab.id}`}
          aria-selected={active === tab.id}
          aria-controls={`${idPrefix}-panel-${tab.id}`}
          tabIndex={active === tab.id ? 0 : -1}
          onClick={() => onChange(tab.id)}
          onKeyDown={(event) => {
            const index = tabs.findIndex((entry) => entry.id === active);
            if (event.key === "ArrowRight") onChange(tabs[(index + 1) % tabs.length].id);
            if (event.key === "ArrowLeft")
              onChange(tabs[(index - 1 + tabs.length) % tabs.length].id);
          }}
          className={cx(
            "px-3 py-2 text-[13px] -mb-px border-b-2 transition-colors",
            active === tab.id
              ? "border-brand text-ink font-medium"
              : "border-transparent text-ink-dim hover:text-ink",
          )}
        >
          {tab.label()}
        </button>
      ))}
    </div>
  );
}

export function TabPanel({
  idPrefix,
  tab,
  children,
  className = "",
}: {
  idPrefix: string;
  tab: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      role="tabpanel"
      id={`${idPrefix}-panel-${tab}`}
      aria-labelledby={`${idPrefix}-tab-${tab}`}
      className={className}
    >
      {children}
    </div>
  );
}
