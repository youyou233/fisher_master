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
    //当天剩余时间
    _time
    //暴露程度
    _exposureLevel: number = 0
    set exposureLevel(val: number) {
        this._exposureLevel = val
    }
    get exposureLevel() {
        return this._exposureLevel
    }
    //玩家名称
    _playerName: string = ""
    //僵尸机数量
    _botNum: number = 0
    //电量
    _battery: number = 0
    //密报仓库
    _secretMap: object[] = []
    //警戒度
    _caution: number = 0
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
