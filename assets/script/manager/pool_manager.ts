const { ccclass, property } = cc._decorator;

@ccclass
export default class PoolManager extends cc.Component {

  static instance: PoolManager = null;

  mapItemPool: cc.NodePool = null
  @property(cc.Prefab)
  mapItemPrefab: cc.Prefab = null

  onLoad() {
    // console.log("PoolManager Onload");
    PoolManager.instance = this;

    this.mapItemPool = new cc.NodePool();
    // for (let i = 0; i < 10; ++i) {
    //   let prefab = cc.instantiate(this.mapItemPrefab); // 创建节点
    //   this.mapItemPool.put(prefab); // 通过 putInPool 接口放入对象池
    // }
  }

  createMapItem(parentNode): cc.Node {
    let item = null;
    if (this.mapItemPool.size() > 0) {
      item = this.mapItemPool.get();
    } else {
      item = cc.instantiate(this.mapItemPrefab);
    }
    item.parent = parentNode;
    return item
  }

  removeMapItem(item) {
    this.mapItemPool.put(item);
  }

}
