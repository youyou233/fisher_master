const { ccclass, property } = cc._decorator

@ccclass
export default class Secret {
  //情报等级
  lv: number = 0
  constructor(lv) {
    this.lv = lv
  }
}
