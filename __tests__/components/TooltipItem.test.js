import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { TooltipItem } from '../../src/components';
import 'jest-styled-components';

const props = {
  color: 'rgb(0, 0, 0)',
  value: 0,
};

afterEach(cleanup);

test('TooltipItem', () => {
  const { container } = render(<TooltipItem {...props} name={'foo'} />);
  const data = container.firstChild;

  expect(data.textContent).toEqual('0 on foo');
  expect(data).toMatchSnapshot();
});

test('TooltipItem with no color', () => {
  const { container } = render(
    <TooltipItem {...props} name={'foo'} color="" />
  );
  const data = container.firstChild;

  expect(data.textContent).toEqual('0 on foo');
  expect(data).toMatchSnapshot();
});

test('TooltipItem with date', () => {
  const date = new Date('09/24/1980');
  const { container } = render(<TooltipItem {...props} name={date} />);
  const data = container.firstChild;

  expect(data.textContent).toEqual('0 on Sep 24, 1980');
  expect(data).toMatchSnapshot();
});
