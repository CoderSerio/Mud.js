// import Mud from '../lib/esm/index.esm.js';
import Mud from '../src/index.js';

window.mud = new Mud({
  el: '#app',
  data: {
    msg: 'Hello Mud!',
  },
  components: {
    home: 'components/home/index.html'
  }
});