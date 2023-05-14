import Mud from '../lib/esm/index.esm.js';

window.mud = new Mud({
  el: '#app',
  data: {
    msg: 'Hello Mud!',
    arr: ['Someday', 'I', 'Will', 'Be', 'Like', 'You'],
    cnt: 1,
    ifShow: false
  },
});