module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  preset: '@shelf/jest-mongodb',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
}
