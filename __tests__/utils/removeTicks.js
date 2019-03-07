import { removeTicks } from '../../src/utils';

const template = `
  <svg>
    <g class="axis-x">
      <path class="domain" d="M0.5,6V0.5H1336.5V6" />
      <g class="tick">
        <line />
        <text />
      </g>
      <g class="tick">
        <line />
        <text />
      </g>
    </g>
  </svg>
`;

beforeEach(() => {
  document.body.innerHTML = template;
});

afterEach(() => {
  document.body.innerHTML = '';
});

test('null node on initial render', () => {
  const node = null;
  expect(removeTicks(node)).toEqual(undefined);
});

test('remove the ticks', () => {
  const node = document.querySelector('.axis-x');
  let ticks = node.querySelectorAll('.tick line');
  expect(ticks.length).toEqual(2);
  removeTicks(node);

  ticks = node.querySelectorAll('.tick line');
  expect(ticks.length).toEqual(0);
});

test('modify the axis path', () => {
  // TODO: Investigate how to use .getAttribute for DOM testing with Jest
});
