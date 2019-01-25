import { classify } from '../../src/utils';

test('transform the string in a class like string', () => {
  expect(classify('Foo Bar-baz')).toEqual('foo-bar-baz');
});
