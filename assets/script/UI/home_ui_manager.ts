import UIManager from "../manager/ui_manager"

/**
 *
 * @dec template文件 需要则复制
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class HomeUIManager extends cc.Component {
    static instance: HomeUIManager = null

    @property(cc.Node)
    content: cc.Node = null
    @property(cc.Button)
    bedBtn: cc.Button = null

    @property(cc.Button)
    shopBtn: cc.Button = null

    @property(cc.Button)
    controlBtn: cc.Button = null

    @property(cc.Button)
    cupboardBtn: cc.Button = null

    @property(cc.Label)
    lastTimeLabel: cc.Label = null

    onLoad() {
        HomeUIManager.instance = this
        this.bindEvent()
        this.content.active = true
    }
    bindEvent() {
        this.bedBtn.node.on("click", this.sleep, this)
        this.controlBtn.node.on("click", this.showControlUI, this)
    }
    sleep() {}
    showUI() {
        this.content.active = true
    }
    hideUI() {
        this.content.active = false
    }
    showControlUI() {
      UIManager.instance.showControlUI()
    }
    
}
