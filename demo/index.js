// import Mud from '../lib/esm/index.esm.js';
import Mud from '../src/index.js';

window.mud = new Mud({
  el: '#app',
  data: {
    msg: 'Hello Mud!',
    arr: ['Someday', 'I', 'Will', 'Be', 'Like', 'You'],
    cnt: 1,
    ifShow: false,
    isShow: true,
    Show:true
  },
});