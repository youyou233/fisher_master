
/**
 * 
 * @dec template文件 需要则复制
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class ControlUIManager extends cc.Component {

  static instance: ControlUIManager = null

  @property(cc.Node)
  content: cc.Node = null

  onLoad() {
    ControlUIManager.instance = this
    this.bindEvent()
    this.content.active = false
    //console.log(People, 'people');
  }
  bindEvent() {
    
  }
  showUI() {
    this.content.active = true
  }
  hideUI() {
    this.content.active = false
  }
  
}

