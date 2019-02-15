import max from 'ramda/src/max';
import min from 'ramda/src/min';

export default xs => [xs.reduce(min), xs.reduce(max)];
