
/**
 * 
 * @dec template文件 需要则复制
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class TemplateUI extends cc.Component {

  static instance: TemplateUI = null



  @property(cc.Node)
  content: cc.Node = null

  @property(cc.Button)
  mask: cc.Button = null

  onLoad() {
    TemplateUI.instance = this
    this.bindEvent()
    this.content.active = false
  }
  bindEvent() {
    this.mask.node.on('click', this.hideUI, this)
  }
  showUI() {
    this.content.active = true
  }
  hideUI() {
    this.content.active = false
  }
}

