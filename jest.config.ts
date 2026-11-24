export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|webp|svg|mp4)$': '<rootDir>/src/__mocks__/fileMock.ts',
      // Mirror the path aliases from vite.config.ts / tsconfig.app.json
      '^(components|constants|hooks|utils|assets|types|styles|pages)/(.*)$': '<rootDir>/src/$1/$2',
    },
    transform: {
      '^.+\\.tsx?$': ['ts-jest', {
        tsconfig: {
          jsx: 'react-jsx',
          esModuleInterop: true,
          // Lets ts-jest's type-check resolve the "components/...", "constants/..." aliases
          baseUrl: 'src',
        },
      }],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testMatch: ['**/__tests__/**/*.(ts|tsx)', '**/*.(test|spec).(ts|tsx)'],
    collectCoverageFrom: [
      'src/**/*.{ts,tsx}',
      '!src/**/*.d.ts',
      '!src/main.tsx',
      '!src/vite-env.d.ts',
    ],
  };