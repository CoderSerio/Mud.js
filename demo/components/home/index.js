import Mud from '../../../lib/esm/index.esm.js';

new Mud({
  el: '#home',
  data: {
    msg: 'Hello Mud!',
    arr: ['Someday', 'I', 'Will', 'Be', 'Like', 'You'],
    cnt: '',
    ifShow: false,
  },
});
