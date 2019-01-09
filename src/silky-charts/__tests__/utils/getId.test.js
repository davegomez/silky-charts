import { getId } from '../../utils';

test('return a null if no prefix is provided', () => {
  expect(getId()).toEqual(null);
});

test('return a new id every time is called', () => {
  expect(getId('foo')).toEqual('silky-charts-foo-0');
  expect(getId('foo')).toEqual('silky-charts-foo-1');
  expect(getId('foo')).toEqual('silky-charts-foo-2');
});
