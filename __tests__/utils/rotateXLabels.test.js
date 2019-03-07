import { rotateXLabels } from '../../src/utils';

const template = `
  <svg>
    <g class="axis-x">
      <g class="tick">
        <text />
      </g>
      <g class="tick">
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
  expect(rotateXLabels(node, 50)).toEqual(undefined);
});

test('rotate labels to 50 degrees', () => {
  const node = document.querySelector('svg');
  const labels = node.querySelectorAll('.axis-x text');
  rotateXLabels(node, 50);
  labels.forEach(label =>
    expect(label.getAttribute('transform')).toEqual(
      'translate(12, 6) rotate(50)'
    )
  );
});

test('rotate labels to -50 degrees', () => {
  const node = document.querySelector('svg');
  const labels = node.querySelectorAll('.axis-x text');
  rotateXLabels(node, -50);
  labels.forEach(label =>
    expect(label.getAttribute('transform')).toEqual(
      'translate(-12, 6) rotate(-50)'
    )
  );
});
