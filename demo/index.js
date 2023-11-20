import Mud from '../lib/esm/index.esm.js';

new Mud({
  el: '#app',
  data: {
    msg: 'Hello Mud!',
    cnt: 1,
    test:{
      name:"ljj",
      age:12
    }
  },
  components: {
    home: 'components/home/index.html',
  },
  onMount: () => {
    console.log(mud.data.msg);
  }
});

