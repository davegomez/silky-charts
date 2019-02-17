module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      '__mocks__/**/*.js?(x)',
    ],

    tests: ['__tests__/**/*.test.js?(x)'],

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
