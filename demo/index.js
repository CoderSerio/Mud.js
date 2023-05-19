import Mud from '../lib/esm/index.esm.js';

new Mud({
  el: '#app',
  data: {
    msg: 'Hello Mud!',
    cnt: 1,
    a: {
      b: 1
    }
  },
  components: {
    home: 'components/home/index.html'
  }
});