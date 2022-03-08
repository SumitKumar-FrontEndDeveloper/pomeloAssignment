module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: ['html', 'json', 'text-summary', 'lcov'],
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverageFrom: [
    '!<rootDir>/pages/**/*.{js,jsx,mjs}',
    '!<rootDir>/public/**/*.{js,jsx,mjs}',
    '!<rootDir>/.next/**/*.{js,jsx,mjs}',
    '!<rootDir>/coverage/**/*.{js,jsx,mjs}',
    '!<rootDir>/store.{js,jsx,mjs}',
    '!<rootDir>/package.json',
    '!<rootDir>/.eslintrc.json',
    '!<rootDir>/package-lock.json',
    '!<rootDir>/.next',
    '!<rootDir>/jest.config.js',
    '!<rootDir>/postcss.config.js',
    '!<rootDir>/tailwind.config.js',
    '!<rootDir>/next.config.js',
    '!<rootDir>/reducers/index.js'
  ],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/CSSStub.js`
  },
  setupFiles: ['<rootDir>/enzyme.setup.js'],
  coveragePathIgnorePatterns:["<rootDir>/.next/","<rootDir>/coverage/"],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\','\\\\.next\\\\','package.json','.eslintrc.json'],
  testURL: 'http://localhost',
  transformIgnorePatterns: ['<rootDir>/node_modules/','<rootDir>/.next/'],
  verbose: false
}
