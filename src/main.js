import Mue from '../mue-core/mue.js';

window.mue = new Mue({
  el: '#app',
  data: {
    msg: 'Hello MUE!',
    arr: ['Someday', 'I', 'Will', 'Be', 'Like', 'You'],
    cnt: 1,
  },
});
