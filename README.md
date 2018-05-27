# WorldToPc

存档移植工具 worldtopc 测试版0.0.7

测试版期间 BUG反馈请与我联系  email:alphaae@foxmail.com     qq:1226123914

使用说明
在PE端使用启动器等工具加载"WorldToPc.js"脚本
在PC Minecraft1.8.9端使用forge客户端加载"WorldToPc.jar"Mod文件  (目前PC仅在1.8.9进行测试，本体成熟后会加入其它版本)


WorldToPc.js用法：
使用物品"钻石"点击方块获取"基准点"
使用物品"铁剑"选取导出范围的两个对角顶点
点击导出按钮
导出完成后可在在SD卡 games/com.mojiang/worldouts文件夹中看到"存档名称.worldo"文件
将该文件拷贝至PC设备


WorldToPc.jar用法：
在创造模式中背包工具选单中可看到工具"选择棒"   ID:worldtopc:worldtopc
使用选择棒右击方块，即选择该方块为基准点
在弹出的文件选择器中选择上文的"存档名称.worldo"文件
生成完成


注：因为部分方块在导入后需要刷新(如：沙子类)，建议导入完成后重新进入存档可避免卡顿现象的发生
