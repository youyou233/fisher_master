import UIManager from "../manager/ui_manager"
import DD from "../manager/dynamic_data_manager"

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
    this.shopBtn.node.on('click', this.openShopUI, this)
    this.controlBtn.node.on("click", this.showControlUI, this)
    this.cupboardBtn.node.on('click', this.showCupboardUI, this)
  }
  sleep() {
    UIManager.instance.LoadTipsByStr('睡觉中')
    DD.instance.data = +DD.instance.data - 1 + ''
  }
  showUI() {
    this.content.active = true
  }
  hideUI() {
    this.content.active = false
  }
  showControlUI() {
    UIManager.instance.showControlUI()
  }
  showCupboardUI() {
    UIManager.instance.showCupboardUI()
    UIManager.instance.LoadTipsByStr('打开仓库页面')
  }
  openShopUI() {
    UIManager.instance.showShopUI()
    UIManager.instance.LoadTipsByStr('打开商店页面')
  }
}
