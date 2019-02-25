import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Tooltip } from '../../src/components';
import 'jest-styled-components';

const props = {
  pageX: 100,
  pageY: 100,
};

afterEach(cleanup);

test('Tooltip', () => {
  const { container } = render(<Tooltip {...props}>foo</Tooltip>);

  const tooltip = container.firstChild;
  expect(tooltip).toMatchSnapshot();
  expect(tooltip.classList.contains('silky-charts-tooltip')).toBe(true);
  expect(tooltip.textContent).toEqual('foo');
});

test('SVG', () => {
  const { container } = render(
    <Tooltip {...props}>
      <div width="100px" className="child">
        foo
      </div>
    </Tooltip>
  );

  const tooltip = container.firstChild;
  expect(tooltip).toMatchSnapshot();
  expect(tooltip.classList.contains('silky-charts-tooltip')).toBe(true);
});

test('SVG for static tooltips', () => {
  const { container } = render(
    <Tooltip {...props} staticTooltip>
      <div width="100px" className="child">
        foo
      </div>
    </Tooltip>
  );

  const tooltip = container.firstChild;
  expect(tooltip).toMatchSnapshot();
  expect(tooltip.classList.contains('silky-charts-tooltip')).toBe(true);
});
