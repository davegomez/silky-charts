/* ignore file coverage */

module.exports = jest.fn(() => ({
  ticks: jest.fn(() => ({
    tickFormat: jest.fn(),
  })),
}));
