/**
 *  床头柜
 * @dec 
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class BookshelfUIManager extends cc.Component {
    static instance: BookshelfUIManager = null

    @property(cc.Node)
    content: cc.Node = null

    @property(cc.Button)
    backBtn: cc.Button = null

    @property(cc.Node)
    container: cc.Node = null

    onLoad() {
        BookshelfUIManager.instance = this
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
