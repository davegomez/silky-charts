import { rotateXLabels } from '../../src/utils';

jest.mock('d3-selection', () => require.requireActual('d3-selection'));

let template = `
  <body>
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
  </body>
  `;

let node = null;
let labels = null;

beforeEach(() => {
  document.body.innerHTML = template;
  node = document.querySelector('svg');
  labels = node.querySelectorAll('.axis-x text');
});

afterEach(() => {
  document.body.innerHTML = '';
  node = null;
  labels = null;
});

test('rotate labels to 50 degrees', () => {
  require.requireActual('d3-selection');
  rotateXLabels(node, 50);
  labels.forEach(label =>
    expect(label.getAttribute('transform')).toEqual(
      'translate(12, 6) rotate(50)'
    )
  );
});

test('rotate labels to 50 degrees', () => {
  rotateXLabels(node, -50);
  labels.forEach(label =>
    expect(label.getAttribute('transform')).toEqual(
      'translate(-12, 6) rotate(-50)'
    )
  );
});
