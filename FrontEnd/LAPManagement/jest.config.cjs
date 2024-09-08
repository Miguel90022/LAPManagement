module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    '\.(css)$': './tests/stylesMock.js',
    '\.(png|jpg|jpeg|gif|svg)$': './tests/stylesMock.js',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
