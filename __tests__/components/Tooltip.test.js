import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { GraphContext } from '../../src/contexts';
import { Tooltip } from '../../src/components';
import graphContext from '../../__mocks__/graphContext';
import 'jest-styled-components';

const props = {
  mousePosition: {
    pageX: 180,
    pageY: 45,
  },
};

afterEach(cleanup);

test('Tooltip', () => {
  const { container } = render(
    <GraphContext.Provider value={graphContext}>
      <Tooltip {...props}>foo</Tooltip>
    </GraphContext.Provider>
  );

  const tooltip = container.firstChild;
  expect(tooltip).toMatchSnapshot();
  expect(tooltip.classList.contains('silky-charts-tooltip')).toBe(true);
  expect(tooltip.textContent).toEqual('foo');
});

test('Tooltip static', () => {
  const { container } = render(
    <GraphContext.Provider
      value={{ ...graphContext, staticTooltip: 'top-left' }}
    >
      <Tooltip {...props}>
        <div width="100px" className="child">
          foo
        </div>
      </Tooltip>
    </GraphContext.Provider>
  );

  const tooltip = container.firstChild;
  expect(tooltip).toMatchSnapshot();
  expect(tooltip.classList.contains('silky-charts-tooltip')).toBe(true);
});
