// jest.config.ts
import type { JestConfigWithTsJest } from 'ts-jest'

const ignorePatterns = [
  'd3-shape',
  'd3-path',
	'p-cancelable',
  '.*\\.cjs$',
  '.*\\.mjs$',
]

const jestConfig: JestConfigWithTsJest = {
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
    "ts",
    "tsx",
  ],
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  testMatch: [
    "**/*.test\.[jt]s?(x)",
  ],
  testPathIgnorePatterns: [
      '\.(css|scss|sass)$',
  ],
  transform: {
    "^.+\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: [
		'.*node_modules/(?!(' + ignorePatterns.join('|') + ')/).*',
	],
  "roots": [
    "<rootDir>",
  ],
  "modulePaths": [
    "<rootDir>",
  ]
}
export default jestConfig;