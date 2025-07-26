// src/setupTests.ts
import '@testing-library/jest-dom';

// Extend Jest matchers with @testing-library/jest-dom
import 'jest';

declare module 'jest' {
  interface Matchers<R> {
    toBeInTheDocument(): R;
    toHaveClass(className: string): R;
    toBeDisabled(): R;
    toHaveAttribute(attr: string, value?: string): R;
  }
}