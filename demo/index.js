import Mue from '../lib/esm/index.js';
// import Mue from '../src/index.js';

window.mue = new Mue({
  el: '#app',
  data: {
    msg: 'Hello Mud!',
    arr: ['Someday', 'I', 'Will', 'Be', 'Like', 'You'],
    cnt: 1,
    ifShow : false
  },
});