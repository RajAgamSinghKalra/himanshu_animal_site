// Simple horizontal or vertical separator element
export function createSeparator(orientation = 'horizontal') {
  const el = document.createElement('div');
  el.className = orientation === 'horizontal'
    ? 'separator-horizontal'
    : 'separator-vertical';
  return el;
}
