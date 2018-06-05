import owners from './owners';
import ducks from './ducks';
import test from './test';

export default {
  routes: {
    ...owners,
    ...ducks,
    ...test,
  }
}
