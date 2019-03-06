module.exports = jest.fn(() => ({
  copy: jest.fn(() => ({})),
  domain: jest.fn(),
  range: jest.fn(() => [0, 10]),
}));
