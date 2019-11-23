import DD from "../manager/dynamic_data_manager"
import PoolManager from "../manager/pool_manager"

/**
 *
 * @dec template文件 需要则复制
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class CupboardUIManager extends cc.Component {
    static instance: CupboardUIManager = null

    @property(cc.Node)
    content: cc.Node = null

    @property(cc.Button)
    backBtn: cc.Button = null

    @property(cc.Node)
    container: cc.Node = null


    @property(cc.Button)
    switchBtn: cc.Button[] = null
    secretNodeArr: object[] = []

    curTab: number = 0
    onLoad() {
        CupboardUIManager.instance = this
        this.bindEvent()
        this.content.active = false
        //console.log(People, 'people');
    }
    bindEvent() {
        this.backBtn.node.on("click", this.hideUI, this)
        for (let i = 0; i < this.switchBtn.length, i++) {
            this.switchBtn[i].node.on('click', () => {
                this.switchTab(i)
            }, this)
        }
    }
    showUI() {
        this.content.active = true
    }
    hideUI() {
        this.content.active = false
    }
    switchTab(num) {
        if (this.curTab != num) {
            this.curTab = num
            this.updateList()
        }
    }
    updateList() {
        for (let i = this.container.children.length - 1; i > 0; i--) {
            let node = this.container.children[i]
            PoolManager.instance.removeSecretItem(node)
        }

        for (let i = 0; i < DD.instance.secretMap.length; i++) {
            //判断tab
            if (DD.instance.secretMap[i].lv == this.curTab) {
                PoolManager.instance.createSecretItem(this.container)
            }
        }
    }
}
