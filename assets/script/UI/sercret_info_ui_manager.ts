/**
 *
 * @dec template文件 需要则复制
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class SercretInfoUIManager extends cc.Component {
    static instance: SercretInfoUIManager = null

    @property(cc.Node)
    content: cc.Node = null

    @property(cc.Button)
    backBtn: cc.Button = null

    

    onLoad() {
        SercretInfoUIManager.instance = this
        this.bindEvent()
        this.content.active = false
        //console.log(People, 'people');
    }
    bindEvent() {
        this.backBtn.node.on("click", this.hideUI, this)
    }
    showUI() {
        this.content.active = true
    }
    hideUI() {
        this.content.active = false
    }
}
