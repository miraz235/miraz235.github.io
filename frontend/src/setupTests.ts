import "@testing-library/jest-dom";

// Mock matchMedia (used by some libs)
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// Mock IntersectionObserver (framer-motion's whileInView)
class IO {
  observe = () => {};
  unobserve = () => {};
  disconnect = () => {};
  takeRecords = () => [];
  root = null;
  rootMargin = "";
  thresholds = [];
}
// @ts-ignore
window.IntersectionObserver = IO;

// Mock ResizeObserver
class RO {
  observe = () => {};
  unobserve = () => {};
  disconnect = () => {};
}
// @ts-ignore
window.ResizeObserver = RO;

// Clipboard mock (default success)
Object.defineProperty(window.navigator, "clipboard", {
  writable: true,
  value: {
    writeText: jest.fn(() => Promise.resolve()),
  },
});