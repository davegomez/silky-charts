import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { DataSource } from '../../src/components';
import { MARGIN } from '../../src/utils/constants';
import 'jest-styled-components';

const props = {
  height: 10,
  margin: MARGIN,
  width: 10,
};

afterEach(cleanup);

test('DataSource:text', () => {
  const { container } = render(
    <svg>
      <DataSource {...props} dataSource="foo" />
    </svg>
  );

  const text = container.querySelector('text');
  expect(text).toMatchSnapshot();
  expect(text.classList.contains('data-source')).toBe(true);
});

test('DataSource:link', () => {
  const { container } = render(
    <svg>
      <DataSource
        {...props}
        dataSource={{ href: '#', target: 'bar', title: 'foo' }}
      />
    </svg>
  );

  const link = container.querySelector('a');
  expect(link).toMatchSnapshot();
  expect(link.classList.contains('data-source-link')).toBe(true);

  const text = container.querySelector('text');
  expect(text).toMatchSnapshot();
  expect(text.classList.contains('data-source')).toBe(true);
});
