// Utility to detect mobile screen size without React
(function(global) {
  const MOBILE_BREAKPOINT = 768;

  function isMobile() {
    return window.innerWidth < MOBILE_BREAKPOINT;
  }

  function onChange(callback) {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const handler = () => callback(isMobile());
    mql.addEventListener('change', handler);
    // Initial state
    callback(isMobile());
    return () => mql.removeEventListener('change', handler);
  }

  global.mobileUtils = { isMobile, onChange };
})(window);
