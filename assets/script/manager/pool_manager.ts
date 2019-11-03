const { ccclass, property } = cc._decorator;

@ccclass
export default class PoolManager extends cc.Component {

  static instance: PoolManager = null;

  secretItemPool: cc.NodePool = null
  @property(cc.Prefab)
  secretItemPrefab: cc.Prefab = null

  onLoad() {
    // console.log("PoolManager Onload");
    PoolManager.instance = this;

    this.secretItemPool = new cc.NodePool();
    // for (let i = 0; i < 10; ++i) {
    //   let prefab = cc.instantiate(this.secretItemPrefab); // 创建节点
    //   this.secretItemPool.put(prefab); // 通过 putInPool 接口放入对象池
    // }
  }

  createSecretItem(parentNode): cc.Node {
    let item = null;
    if (this.secretItemPool.size() > 0) {
      item = this.secretItemPool.get();
    } else {
      item = cc.instantiate(this.secretItemPrefab);
    }
    item.parent = parentNode;
    return item
  }

  removeSecretItem(item) {
    this.secretItemPool.put(item);
  }

}
