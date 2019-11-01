/**
 *  邮件
 * @dec 
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class EmailUIManager extends cc.Component {
    static instance: EmailUIManager = null

    @property(cc.Node)
    content: cc.Node = null

    @property(cc.Button)
    backBtn: cc.Button = null

    onLoad() {
        EmailUIManager.instance = this
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
