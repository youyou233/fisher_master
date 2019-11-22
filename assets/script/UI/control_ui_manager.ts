import UIManager from "../manager/ui_manager";
import { Utils } from "../common/utils";
import DD from "../manager/dynamic_data_manager";
import PoolManager from "../manager/pool_manager";
import SecretItem from "./item/secret_item";
import Secret from "../class/secret";

/**
 *
 * @dec template文件 需要则复制
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class ControlUIManager extends cc.Component {
  static instance: ControlUIManager = null

  @property(cc.Node)
  content: cc.Node = null
  @property(cc.Button)
  fishBtn: cc.Button = null

  @property(cc.Button)
  digBtn: cc.Button = null

  @property(cc.Button)
  hideBtn: cc.Button = null

  @property(cc.Button)
  backBtn: cc.Button = null

  @property(cc.Label)
  batteryLabel: cc.Label = null

  @property(cc.Label)
  cautionLabel: cc.Label = null

  @property(cc.Label)
  botNumLabel: cc.Label = null

  @property(cc.Node)
  container: cc.Node = null

  currentTarget: cc.Node = null
  onLoad() {
    ControlUIManager.instance = this
    this.bindEvent()
    this.content.active = false
    //console.log(People, 'people');
  }
  bindEvent() {
    this.fishBtn.node.on('click', this.fish, this)
    this.digBtn.node.on('click', this.dig, this)

    this.hideBtn.node.on('click', this.hide, this)
    this.backBtn.node.on('click', this.hideUI, this)
  }
  fish() {
    if (DD.instance.battery <= 0) {
      UIManager.instance.LoadTipsByStr('电量不够')
      return
    }
    let random = Utils.random(0, 100)
    UIManager.instance.LoadTipsByStr('钓鱼成功:' + random + "")
    this.getFishSecret(random)
  }
  getFishSecret(num: number) {
    let lv = 0
    if (num <= 40) {
      lv = 1
    } else if (num > 40 && num <= 60) {
      lv = 2
    } else if (num > 60 && num <= 80) {
      lv = 3
    } else {
      lv = -1
    }
    DD.instance.addSecretMap(new Secret(lv))
    DD.instance.caution = DD.instance.caution + Utils.random(1, 5)
    DD.instance.battery = DD.instance.battery - 1
  }
  dig() {
    if (!this.currentTarget) {
      UIManager.instance.LoadTipsByStr('请选择一项数据进行挖掘')
    } else {
      let random = Utils.random(0, 100)
      UIManager.instance.LoadTipsByStr('挖掘成功:' + random + "")
    }
  }
  hide() {
    if (DD.instance.botNum <= 0) {
      UIManager.instance.LoadTipsByStr('僵尸机数量不够')
      return
    }
    let random = Utils.random(0, 15)
    let num = 0
    if (random <= 5) {
      num = Utils.random(5, 10)
      UIManager.instance.LoadTipsByStr('隐藏失败，遭到反追踪')
    } else if (random <= 10) {
      num = - Utils.random(10, 15)
      UIManager.instance.LoadTipsByStr('隐藏成功')
    } else {
      num = - Utils.random(15, 20)
      UIManager.instance.LoadTipsByStr('隐藏大成功')
    }
    DD.instance.caution = (DD.instance.caution + num) >= 0 ? (DD.instance.caution + num) : 0
    DD.instance.botNum = DD.instance.botNum - 1
  }
  showUI() {
    this.content.active = true
  }
  hideUI() {
    this.content.active = false
  }
  updataContainer() {
    this.clearContainer()
    for (let item in DD.instance.secretMap) {
      let secret = PoolManager.instance.createSecretItem(this.container)
      secret.getComponent(SecretItem).init(DD.instance.secretMap[item].lv)
    }
  }
  clearContainer() {
    let children = this.container.children
    for (; children.length > 0;) {
      PoolManager.instance.removeSecretItem(children[0])
    }
  }
}
