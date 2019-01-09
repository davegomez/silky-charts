import { setupData } from '../../utils';

const data = [
  { name: 'foo', value: 1 },
  { name: 'bar', value: 2 },
  { name: 'baz', value: 3 },
];

const dataWidthDates = [
  { name: '2018-02-20T05:00:00.000Z', value: 1 },
  { name: '2018-03-20T05:00:00.000Z', value: 2 },
  { name: '2018-04-20T05:00:00.000Z', value: 3 },
];

test('setup user data', () => {
  expect(setupData(data)).toEqual([false, data]);
});

test('setup user data width dates', () => {
  const [isDates, data] = setupData(dataWidthDates);
  expect(isDates).toBe(true);
  data.map(d => {
    expect(d.name).toBeInstanceOf(Date);
  });
});
