/* ignore file coverage */

const selection = jest.genMockFromModule('d3-selection');

const attr = () => ({ attr });

const fn = () => ({
  call: jest.fn(),
  select: jest.fn(() => ({ attr })),
  selectAll: jest.fn(() => ({ attr })),
});

selection.select = fn;
selection.selectAll = fn;

module.exports = selection;
