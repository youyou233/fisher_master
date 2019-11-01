import { shopType } from "../common/enum"

/**
 *
 * @dec template文件 需要则复制
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class ShopUIManager extends cc.Component {
    static instance: ShopUIManager = null

    @property(cc.Node)
    content: cc.Node = null

    @property(cc.Button)
    backBtn: cc.Button = null

    tab: shopType = 0

    @property(cc.Button)
    tabBtns: cc.Button[] = []

    @property(cc.Node)
    container: cc.Node = null

    onLoad() {
        ShopUIManager.instance = this
        this.bindEvent()
        this.content.active = false
        //console.log(People, 'people');
    }
    bindEvent() {
        this.backBtn.node.on("click", this.hideUI, this)
        let shopTypeKey = ["secret", "book", "device"]
        this.tabBtns.map((btn, index) => {
            btn.node.on(
                "click",
                () => {
                    this.switchTab(shopType[shopTypeKey[index]])
                },
                this
            )
        })
    }
    switchTab(type: shopType) {
        console.log("当前切换shopType", type, shopType[type])
    }
    showUI() {
        this.content.active = true
    }
    hideUI() {
        this.content.active = false
    }
}
