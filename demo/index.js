// import Mud from '../lib/esm/index.esm.js';
import Mud from '../src/index.js';

new Mud({
  el: '#app',
  data: {
    cnt: 1,
    a: {
      b: {
        c: 1
      },
    },
  },
  components: {
    home: 'components/home/index.html'
  }
});
