// 发布者
export default class Publisher {

  constructor(data) {
    this.viewers = [];
  }

  addViewer(viewer) {
    this.viewers.push(viewer);
  }

  publish() {
    this.viewers.forEach((viewer) => {
      viewer.update();
    });
  }
}