import head from 'ramda/src/head';
import { themes } from './palette';

export default theme => head(themes[theme]);
