// Basic collapsible functionality without React or Radix
export function initCollapsible(triggerSelector, contentSelector) {
  const trigger = document.querySelector(triggerSelector);
  const content = document.querySelector(contentSelector);
  if (!trigger || !content) return;
  trigger.addEventListener('click', () => {
    content.classList.toggle('hidden');
  });
}
