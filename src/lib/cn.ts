/**
 * Tiny className joiner — filters out falsy values and joins with spaces.
 * Keeps JSX readable without pulling in a dependency.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
