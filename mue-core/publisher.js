// 发布者
class Publisher {
  constructor() {
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

export default Publisher;