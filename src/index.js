import Mud from './mud-core/mud.js';

window.mud = new Mud({
  el: '#app',
  data: {
    msg: 'Hello mud!',
    arr: ['Someday', 'I', 'Will', 'Be', 'Like', 'You'],
    cnt: 1,
  },
});