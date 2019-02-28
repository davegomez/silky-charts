import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { TooltipGroup } from '../../src/components';
import 'jest-styled-components';

afterEach(cleanup);

test('TooltipGroup', () => {
  const { container } = render(
    <TooltipGroup
      data={[
        { name: 'foo', series: 'bar', value: 0 },
        { name: 'foo', series: 'qux', value: 1 },
      ]}
    />
  );

  expect(container).toMatchSnapshot();
  expect(container.firstChild.textContent).toEqual('foo');
  expect(container.childNodes.length).toEqual(3);
  expect(container.childNodes[1].textContent).toEqual('0 on bar');
  expect(container.childNodes[2].textContent).toEqual('1 on qux');
});

test('TooltipGroup with date', () => {
  const date = new Date('09/24/1980');
  const { container } = render(
    <TooltipGroup
      data={[
        { name: date, series: 'bar', value: 0 },
        { name: date, series: 'qux', value: 1 },
      ]}
    />
  );

  expect(container).toMatchSnapshot();
  expect(container.firstChild.textContent).toEqual('Sep 24, 1980');
  expect(container.childNodes.length).toEqual(3);
  expect(container.childNodes[1].textContent).toEqual('0 on bar');
  expect(container.childNodes[2].textContent).toEqual('1 on qux');
});
