module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.js',
      '__@(mocks|fixtures)__/*.js',
      '!__tests__/**/*.js',
      '!node_modules/**',
    ],

    tests: ['__tests__/**/*.js', '!node_modules/**'],

    env: {
      type: 'node',
      runner: 'node',
    },

    hints: {
      ignoreCoverageForFile: /ignore file coverage/,
    },

    testFramework: 'jest',

    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },
  };
};
