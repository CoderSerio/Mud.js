import Mud from '../lib/esm/index.esm.js';
// import Mud from '../src/mud-core/mud/mud.js'
new Mud({
  el: '#app',
  data: {
    msg: 'Hello',
    msg: 'Hello',
    cnt: 1,
    ifShow: false,
    isShow: true,
    Show:true
  },
  components: {
    home: 'components/home/index.html',
  },
  onMount: () => {
    console.log(mud.data.msg);
  }
});

