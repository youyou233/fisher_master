import MessageBoxUIManager from "../UI/messagebox_ui_manager"
import TipsUIManager from "../ui/tips_ui_manager"
import ControlUIManager from "../UI/control_ui_manager"
import CupboardUIManager from "../UI/cupboard_ui_manager"
import ShopUIManager from "../UI/shop_ui_manager"
import SecretInfoUIManager from "../UI/secret_info_ui_manager"

const { ccclass, property } = cc._decorator
interface OkCalBack {
  (isOK: boolean, param?: {}): void
}
@ccclass
export default class UIManager extends cc.Component {
  static _instance: UIManager = null

  static get instance() {
    if (this._instance == null) {
      this._instance = new UIManager()
    }
    return this._instance
  }
  static Z_ORDER_1: number = 100
  static Z_ORDER_2: number = 200
  static Z_ORDER_3: number = 300
  static Z_ORDER_4: number = 400
  static Z_ORDER_5: number = 500
  static Z_ORDER_6: number = 600

  keyLock: { [key: string]: boolean } = {}
  loadUIRes(resUrl: string, depth: number, callBack: any) {
    if (UIManager.instance.keyLock[resUrl] == null) {
      UIManager.instance.keyLock[resUrl] = false
    }
    if (UIManager.instance.keyLock[resUrl] == false) {
      UIManager.instance.keyLock[resUrl] = true

      cc.loader.loadRes(resUrl, function (err, prefab) {
        if (err == null) {
          let newNode = cc.instantiate(prefab) as cc.Node
          let canvas = cc.director.getScene().getChildByName("Canvas")
          canvas.addChild(newNode, depth)
          callBack()

          if (UIManager.instance.keyLoadTime[resUrl]) {
            delete UIManager.instance.keyLoadTime[resUrl]
            //GameManager.instance.clsoeLoadUITip()
          }

          delete UIManager.instance.keyLock[resUrl]
        } else {
          UIManager.instance.keyLock[resUrl] = false
        }
      })
    }
  }

  keyLoadTime: { [key: string]: number } = {}
  updateLoadTime(dt) {
    for (let item in this.keyLock) {
      if (this.keyLock[item] == true) {
        if (this.keyLoadTime[item] == null) {
          this.keyLoadTime[item] = 0
        }
        if (this.keyLoadTime[item] != -1) {
          this.keyLoadTime[item] += dt
          if (this.keyLoadTime[item] > 1 && this.keyLoadTime[item] < 5) {
            //GameManager.instance.loadingUI()
          } else if (this.keyLoadTime[item] > 5) {
            //GameManager.instance.loadUIFail()
            this.keyLoadTime[item] = -1
          }
        }
      }
    }
  }

  showControlUI() {
    if (ControlUIManager.instance) {
      ControlUIManager.instance.showUI()
    } else {
      // this.loadUIRes("ui/control_ui", UIManager.Z_ORDER_5, function () {
      //   ControlUIManager.instance.showUI()
      // })
    }
  }

  showCupboardUI() {
    if (CupboardUIManager.instance) {
      CupboardUIManager.instance.showUI()
    } else {
      this.loadUIRes("ui/cupboard_ui", UIManager.Z_ORDER_5, function () {
        CupboardUIManager.instance.showUI()
      })
    }
  }
  showEmailUI() {
    // if (ShopUIManager.instance) {
    //   ShopUIManager.instance.showUI()
    // } else {
    // this.loadUIRes("ui/shop_ui", UIManager.Z_ORDER_5, function () {
    //   ShopUIManager.instance.showUI()
    // })
    // }
  }
  showShopUI() {
    if (ShopUIManager.instance) {
      ShopUIManager.instance.showUI()
    } else {
      this.loadUIRes("ui/shop_ui", UIManager.Z_ORDER_5, function () {
        ShopUIManager.instance.showUI()
      })
    }
  }
  showSecretInfoUI() {
    if (SecretInfoUIManager.instance) {
      SecretInfoUIManager.instance.showUI()
    } else {
      // this.loadUIRes("ui/secret_info_ui", UIManager.Z_ORDER_5, function () {
      //   SecretInfoUIManager.instance.showUI()
      // })
    }
  }
  LoadMessageBox(title: string, desc: string, callback: OkCalBack = null, param: {} = null, isNormal: boolean = true) {
    if (MessageBoxUIManager.instance) {
      MessageBoxUIManager.instance.showUI(title, desc, callback, param, isNormal)
    } else {
      this.loadUIRes("ui/message_ui", UIManager.Z_ORDER_5, function () {
        MessageBoxUIManager.instance.showUI(title, desc, callback, param, isNormal)
      })
    }
  }

  LoadTipsByStr(desc: string) {
    if (TipsUIManager.instance) {
      TipsUIManager.instance.showTipsByStr(desc)
    } else {
      this.loadUIRes("ui/tips_ui", UIManager.Z_ORDER_6, function () {
        TipsUIManager.instance.showTipsByStr(desc)
      })
    }
  }
}
