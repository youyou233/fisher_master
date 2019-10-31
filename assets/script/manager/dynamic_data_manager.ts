const { ccclass, property } = cc._decorator

/**
 * 此文件用于控制游戏中所有数据 以及可视化绑定
 */
@ccclass
export default class DynamicDataManager extends cc.Component {
    static _instance: DynamicDataManager = null

    //------------------ 玩家数值区 ------------------

    static get instance() {
        if (this._instance == null) {
            this._instance = new DynamicDataManager()
        }
        return this._instance
    }
    //------------------ 实时更新数据 ------------------
    //当前时间
    _data: string = ""
    set data(val: string) {
        this._data = val
    }
    get data() {
        return this._data
    }

    //暴露程度
    _exposureLevel: number = 0
    set exposureLevel(val: number) {
        this._exposureLevel = val
    }
    get exposureLevel() {
        return this._exposureLevel
    }

    _playerName: string = ""

    _botNum: number = 0

    _battery: number = 0

    screteMap:object[]=[]
    //----------------  实时更新数据end ----------------

    bindPlayerData() {}

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
