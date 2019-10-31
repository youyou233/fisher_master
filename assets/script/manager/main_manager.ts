import DynamicDataManager from "./dynamic_data_manager"
/**
 * 主入口
 */

const { ccclass, property } = cc._decorator
declare global {
    interface Window {
        winSize: any
    }
}
@ccclass
export default class MainManager extends cc.Component {
    static _instance: MainManager = null

    static get instance() {
        if (this._instance == null) {
            this._instance = new MainManager()
        }
        return this._instance
    }
    onLoad() {
        this.setDesignResolution()
        DynamicDataManager.instance.bindPlayerData()
    }
    setDesignResolution() {
        var canvas = cc.find("Canvas").getComponent(cc.Canvas)
        var winSize = cc.winSize
        window.winSize = winSize
        if (winSize.width / winSize.height > 9 / 16) {
            canvas.fitWidth = false
            canvas.fitHeight = true
        } else {
            canvas.fitWidth = true
            canvas.fitHeight = false
        }
    }
}
