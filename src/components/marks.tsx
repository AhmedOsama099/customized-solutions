/**
 * Brand marks.
 * - CustomizedMark: ink tile, flat 3×3 module grid with the indigo "custom
 *   piece" lifted up & right out of its empty slot.
 * - MihnaMark: teal tile with the white "M" monogram (flagship product).
 * - WhatsAppIcon: monochrome WhatsApp glyph (inherits currentColor).
 *
 * `id` prefixes keep gradient ids unique when a mark renders more than once.
 */

type MarkProps = {
  size?: number;
  className?: string;
  /** Unique suffix so multiple instances don't collide on gradient ids. */
  id?: string;
};

export function WhatsAppIcon({ size = 20, className }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      role="img"
      aria-label="WhatsApp"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.886 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

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
