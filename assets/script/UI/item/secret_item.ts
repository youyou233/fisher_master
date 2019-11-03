
/**
 * 
 * @dec SecretItem文件 需要则复制
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class SecretItem extends cc.Component {

  static _instance: SecretItem = null

  @property(cc.Label)
  lvLabel: cc.Label = null

  static get instance() {
    if (this._instance == null) {
      this._instance = new SecretItem()
    }
    return this._instance
  }

  init(lv: number) {
    this.lvLabel.string = 'lv:' + (lv > 0 ? lv : "?") + ""
  }
}
