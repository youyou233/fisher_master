
const { ccclass, property } = cc._decorator;

/**
 * json文件管理 
 */

@ccclass
export default class JsonManager extends cc.Component {

  static _instance: JsonManager = null

  @property(cc.JsonAsset)
  levelJsonAsset: cc.JsonAsset = null
  levelData: JSON = null
  @property(cc.JsonAsset)
  configJsonAsset: cc.JsonAsset = null
  configData: JSON = null
  static get instance() {
    if (this._instance == null) {
      this._instance = new JsonManager()
    }
    return this._instance
  }

  onLoad() {
    // this.levelData = this.levelJsonAsset.json
    // this.configData = this.configJsonAsset.json
  }
}
