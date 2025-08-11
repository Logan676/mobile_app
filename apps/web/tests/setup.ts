import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Stub window.matchMedia for environments without it
// @ts-expect-error: define `window` for Node runtime
if (typeof window === 'undefined') global.window = {} as Window;

if (!window.matchMedia) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}
