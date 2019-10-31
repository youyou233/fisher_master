/**
 *
 * @dec 本地存储文件
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class StorageManager extends cc.Component {
    static _instance: StorageManager = null

    static get instance() {
        if (this._instance == null) {
            this._instance = new StorageManager()
        }
        return this._instance
    }
    /**
     * 加载缓存
     * @param key
     */
    loadStorage(key: string) {
        return new Promise((resolve, reject) => {
            let data = {}
            data = JSON.parse(cc.sys.localStorage.getItem(key))
            resolve(data)
        })
    }
    /**
     * 保存数据
     * @param key
     * @param value
     */
    saveStorage(key: string, value: any) {
        key = key
        cc.sys.localStorage.setItem(key, JSON.stringify(value))
    }
}
