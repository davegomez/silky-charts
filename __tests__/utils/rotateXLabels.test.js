import { rotateXLabels } from '../../src/utils';

test('Should', () => {
  document.body.innerHTML = `
  <body>
    <svg id="foo">
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

  const labels = document.querySelectorAll('#foo .axis-x text');

  rotateXLabels('foo', 50);
  labels.forEach(label =>
    expect(label.getAttribute('transform')).toEqual(
      'translate(12, 6) rotate(50)'
    )
  );

  rotateXLabels('foo', -50);
  labels.forEach(label =>
    expect(label.getAttribute('transform')).toEqual(
      'translate(-12, 6) rotate(-50)'
    )
  );
});
