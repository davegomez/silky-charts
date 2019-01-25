import { allDate } from './';

export default d => {
  const isDates = allDate(d.map(({ name }) => name));
  const data = isDates ? d.map(x => ({ ...x, name: new Date(x.name) })) : d;

  return [isDates, data];
};
