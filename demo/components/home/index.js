// import Mud from '../lib/esm/index.esm.js';
import Mud from '../../../src/index.js';

new Mud({
  el: '#home',
  data: {
    msg: 'Hello Mud!',
    arr: ['Someday', 'I', 'Will', 'Be', 'Like', 'You'],
    cnt: '',
    ifShow: false,
    test: '',
  },
});
