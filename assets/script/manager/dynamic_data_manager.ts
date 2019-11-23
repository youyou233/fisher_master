import HomeUIManager from "../UI/home_ui_manager";
import ControlUIManager from "../UI/control_ui_manager";
import Secret from "../class/secret";
import UIManager from "./ui_manager";

const { ccclass, property } = cc._decorator

/**
 * 此文件用于控制游戏中所有数据 以及可视化绑定
 */
@ccclass
export default class DD extends cc.Component {
  static _instance: DD = null

  //------------------ 玩家数值区 ------------------

  static get instance() {
    if (this._instance == null) {
      this._instance = new DD()
    }
    return this._instance
  }
  //------------------ 实时更新数据 ------------------
  //当前时间
  _data: string = ""
  set data(val: string) {
    if (+val >= 0) {
      this._data = val
    } else {
      UIManager.instance.LoadTipsByStr('游戏结束')
      return
    }
    if (HomeUIManager.instance) {
      HomeUIManager.instance.lastTimeLabel.string = '剩余时间：' + this._data + '天'
    }
  }
  get data() {
    return this._data
  }
  //当天剩余时间
  _time: number = 24 * 60
  set time(val: number) {
    this._time = val
  }

  get time() {
    return this._time
  }
  //警戒度
  _caution: number = 0
  set caution(val: number) {
    if (ControlUIManager.instance) {
      ControlUIManager.instance.cautionLabel.string = "警戒：" + val + ""
    }
    this._caution = val
  }
  get caution() {
    return this._caution
  }
  //玩家名称
  _playerName: string = ""
  //僵尸机数量
  _botNum: number = 0
  set botNum(val: number) {
    if (ControlUIManager.instance) {
      ControlUIManager.instance.botNumLabel.string = "僵尸机:" + val + ""
    }
    this._botNum = val
  }

  get botNum() {
    return this._botNum
  }
  //电量
  _battery: number = 0
  set battery(val: number) {
    if (ControlUIManager.instance) {
      ControlUIManager.instance.batteryLabel.string = "电量：" + val + ""
    }
    this._battery = val
  }

  get battery() {
    return this._battery
  }
  //密报仓库
  _secretMap: Secret[] = []
  set secretMap(map: Secret[]) {
    this._secretMap = map
    if (ControlUIManager.instance && ControlUIManager.instance.content.active) {
      ControlUIManager.instance.updataContainer()
    }
  }
  get secretMap() {
    return this._secretMap
  }
  addSecretMap(data: Secret) {
    let map = this.secretMap
    map.push(data)
    this.secretMap = map
  }
  removeSecretMap(data: Secret) {
    let map = this.secretMap
    for (let item in map) {
      if (map[item] == data) {
        map.splice(+item, 1)
        break
      }
    }
    this.secretMap = map
  }
  //信用点
  _credit: number = 0

  //黑客技能
  _hackSkill: number = 0

  //交涉点
  _nogotiate: number = 0

  //电量加成
  _batteryAdd: number = 0

  //僵尸机回复
  _botAdd: number = 0

  //警戒程度下降
  _cautionCount: number = 0
  //----------------  实时更新数据end ----------------

  //从本地缓存获取data
  bindPlayerData() {
    this.caution = 10
    this.battery = 10
    this.botNum = 5
    this.data = 30 + ''
  }

  /**
   * 判断某种货币是否足够
   * @param type currencyType
   * @param num 数量
   */
  // checkIsEnough(type: currencyType, num: number) {
  //   switch (type) {
  //     case currencyType.money:
  //       return this.money > num
  //     default:
  //       return false
  //   }
  // }
}
