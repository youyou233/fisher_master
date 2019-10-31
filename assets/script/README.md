### 如何快速创建一个弹框

1. 首先想个名字 比如 choose_gift_ui_manager 为多选一的礼物页面
2. 然后在 assets/scripts/ui 文件夹下创建文件 choose_gift_ui_manager.ts
3. 找到 ts_ui_template.ts 文件，复制粘贴其中的所有代码到 choose_gift_ui_manager.ts 中，然后将文件中所有 TemplateUI 字段改成 ChooseGiftUIManager(类名遵循首字母大写驼峰法)
4. 现在我们就创建了一个叫做 ChooseGiftUIManager 类，可以在任意文件中去访问这个类，当然前提是这个类挂在一个实体上，并且这个实体已经被创建
5. 我们需要创建一个 prefab，直接复制粘贴一下 assets/resources/ui 下的 template_ui 文件 , 并且将复制出来的预制体改名为 choose_gift_ui
6. 在 cocoscreator 中打开这个预制体,选择父节点 templateUI , 移除上面的 ts_ui_template 脚本，并且将 choose_gift_ui_manager.ts 拖拽进去
7. 将节点的 content 和 mask 分别拖到脚本的下面
8. 现在打开 ui_manager.ts 文件添加如下代码
    ```
    showChooseGiftUI() {
    if (ChooseGiftUIManager.instance) {
      ChooseGiftUIManager.instance.showUI()
    } else {
      this.loadUIRes('ui/choose_diff_ui', UIManager.Z_ORDER_5, function () {
        ChooseGiftUIManager.instance.showUI()
      })
    }
    }
    ```
9. 然后在任意代码位置使用 UIManager.instance.showChooseGiftUI() 即可打开该弹框，接下来可以打开 choose_gift_ui.prefab 做任何事情了
