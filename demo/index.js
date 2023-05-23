import Mud from '../lib/esm/index.esm.js';

new Mud({
  el: '#app',
  data: {
    msg: 'Hello',
    cnt: 1,
  },
  components: {
    home: 'components/home/index.html',
    about: 'components/about/index.html'
  }
});
