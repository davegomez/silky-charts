import { extendXPath } from '../../src/utils';

test('transform the "d" path attribute', () => {
  document.body.innerHTML = `
  <body>
    <svg id="foo">
      <g class="axis-x">
        <path class="domain" d="M56.05,6V0.5H84.94V6" />
      </g>
    </svg>
  </body>
  `;

  extendXPath('foo', 100);

  const path = document.querySelector('#foo .axis-x path.domain');
  expect(path.getAttribute('d')).toEqual('M0,0.6V0.5H100');
});
