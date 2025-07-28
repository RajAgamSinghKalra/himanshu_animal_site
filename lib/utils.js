// Simple utility for merging CSS classes without Tailwind
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
