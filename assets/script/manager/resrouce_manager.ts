import { resourceType } from "../common/enum"

const { ccclass, property } = cc._decorator

@ccclass
export default class ResourceManager extends cc.Component {
    static instance: ResourceManager = null

    IsInited: boolean = false

    _Atlas: { [key: number]: cc.SpriteAtlas } = {}

    onLoad() {
        //console.log("ResourceManager loading ...");
        ResourceManager.instance = this
        var self = this
        //let urlArr = ["atlas/plant"]
        // cc.loader.loadResArray(urlArr, cc.SpriteAtlas, function(err, atlas) {
        //     if (err) {
        //         console.error(err);
        //         return;
        //     }
        //     if (!ResourceManager.instance._Atlas.hasOwnProperty(resourceType.plant)) {
        //         ResourceManager.instance._Atlas[resourceType.plant] = atlas[resourceType.plant - 1]
        //     }
        //     ResourceManager.instance.IsInited = true
        // })
    }

    /*
    get Inited():boolean{
        return this._isInit
    }   
    */

    getSprite(type: resourceType, name: string): cc.SpriteFrame {
        if (this._Atlas.hasOwnProperty(type)) {
            return this._Atlas[type].getSpriteFrame(name)
        }
        return null
    }
}
