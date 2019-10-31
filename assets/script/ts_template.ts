
/**
 * 
 * @dec template文件 需要则复制
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class Template extends cc.Component {

  static _instance: Template = null

  static get instance() {
    if (this._instance == null) {
      this._instance = new Template()
    }
    return this._instance
  }

  onLoad() {

  }
}
