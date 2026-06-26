/**
 * Brand marks, recreated from the design handoff SVGs.
 * - CustomizedMark: ink tile with 7 modular squares forming a "C"; the
 *   top-right block is tinted accent indigo (the "customized" piece).
 * - MihnaMark: teal tile with the white "M" monogram (flagship product).
 *
 * `id` prefixes keep gradient ids unique when a mark renders more than once.
 */

type MarkProps = {
  size?: number;
  className?: string;
  /** Unique suffix so multiple instances don't collide on gradient ids. */
  id?: string;
};

export function CustomizedMark({ size = 34, className }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Customized"
    >
      <rect width="64" height="64" rx="15" fill="#12161e" />
      {/* empty slot — the missing module, top-right */}
      <rect x="38" y="15" width="11" height="11" rx="3" fill="#242d41" />
      {/* eight placed modules */}
      <rect x="13" y="15" width="11" height="11" rx="3" fill="#eef1f6" />
      <rect x="25.5" y="15" width="11" height="11" rx="3" fill="#eef1f6" />
      <rect x="13" y="27.5" width="11" height="11" rx="3" fill="#eef1f6" />
      <rect x="25.5" y="27.5" width="11" height="11" rx="3" fill="#eef1f6" />
      <rect x="38" y="27.5" width="11" height="11" rx="3" fill="#eef1f6" />
      <rect x="13" y="40" width="11" height="11" rx="3" fill="#eef1f6" />
      <rect x="25.5" y="40" width="11" height="11" rx="3" fill="#eef1f6" />
      <rect x="38" y="40" width="11" height="11" rx="3" fill="#eef1f6" />
      {/* the custom piece — lifted up & to the right */}
      <rect x="43" y="8" width="12" height="12" rx="3" fill="#5b6cff" />
    </svg>
  );
}

export function MihnaMark({ size = 44, className, id = "m" }: MarkProps) {
  const gradId = `mihna-teal-${id}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Mihna"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#047857" />
          <stop offset="1" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="15" fill={`url(#${gradId})`} />
      <path
        d="M15 46 L15 20 L32 36 L49 20 L49 46"
        fill="none"
        stroke="#fff"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
