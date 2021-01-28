<!-- 招生计划管理 -->
<template>
  <div>
    <el-button type="primary" @click="round">画圆</el-button>
    <el-button type="primary" @click="text">文字</el-button>
    <el-button type="primary" @click="PREV_STEP_OPERATE">上一步</el-button>
    <el-button type="primary" @click="svg">查看toSVG</el-button>
    <el-button type="primary" @click="del">删除</el-button>
    <canvas id="canvas" width="350" height="200"></canvas>
  </div>
</template>
<script src="http://cdnjs.cloudflare.com/ajax/libs/fabric.js/2.4.6/fabric.min.js"></script>

<script>
let card = new fabric.Canvas("canvas", {
  isDrawingMode: false,
  skipTargetFind: false,
  controlsAboveOverlay: true
});
export default {
  data() {
    return {
      card: ""
    };
  },
  mounted() {
    this.card = new fabric.Canvas("canvas", {
      isDrawingMode: false,
      skipTargetFind: false,
      controlsAboveOverlay: true
    });

    var card = this.card;
    // var card = new fabric.Canvas("canvas");
    // var path = new fabric.Path("M 0 0 L 200 100 L 170 200 z");
    // path.set({ left: 120, top: 120 });
    // card.add(path);

    // 在canvas对象初始化后，通过以下方式监听
    // 比如监听画布的图层编辑事件
    // console.log("card", card);

    card.selection = true; // 禁止所有选中
    // ...这里可以写canvas对象的一些配置，后面将会介绍

    // 如果<canvas>标签没设置宽高，可以通过js动态设置
    card.setWidth(400);
    card.setHeight(500);
    // card.on("object:modified", e => {
    //   console.log(e.target); // e.target为当前编辑的Object
    //   // ...旋转，缩放，移动等编辑图层的操作都监听到
    //   // 所以如果有撤销/恢复的场景，这里可以保存编辑状态
    //   // 创建一个矩形对象
    //   var rect = new fabric.Rect({
    //     left: 100,
    //     top: 100,
    //     fill: "red",
    //     width: 20,
    //     height: 20
    //   });

    //   // 将矩形添加到canvas画布上
    //   card.add(rect);
    // });

    /**
     * 如何向画布添加一个Textbox对象？
     */

    // 创建一个45度的矩形
    var rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "red",
      width: 20,
      height: 20,
      angle: 45
    });

    card.add(rect);

    rect.set({ left: 20, top: 50 });
    card.renderAll();
  },
  methods: {
    round() {
      var card = this.card;
      var circle = new fabric.Circle({
        radius: 20,
        fill: "green",
        left: 100,
        top: 100,
        width: 125,
        height: 125,
        stroke: "red",
        strokeDashArray: [5, 5]
      });
      var triangle = new fabric.Triangle({
        width: 20,
        height: 30,
        fill: "blue",
        left: 50,
        top: 50
      });
      var group = new fabric.Group([circle, triangle], {
        left: 150,
        top: 100,
        angle: -10
      });

      card.add(group);
      // card.add(circle, triangle);
    },
    text() {
      let card = this.card;
      const textbox = new fabric.Textbox("这是一段文字", {
        left: 50,
        top: 50,
        width: 150,
        fontSize: 20, // 字体大小
        fontWeight: 800, // 字体粗细
        fill: "red", // 字体颜色
        // fontStyle: 'italic',  // 斜体
        // fontFamily: 'Delicious', // 设置字体
        // stroke: 'green', // 描边颜色
        // strokeWidth: 3, // 描边宽度
        hasControls: false,
        borderColor: "orange",
        editingBorderColor: "blue" // 点击文字进入编辑状态时的边框颜色
      });

      var path = new fabric.Path("M 0 100 L 100 100  z");
      path.set({ fill: "red", stroke: "#000", opacity: 0.5, strokeWidth: 3 });

      // 添加文字后，如下图
      card.add(textbox, path);
    },
    // 上一步操作
    PREV_STEP_OPERATE(state) {
      if (state.operIndex > 0) {
        window.card
          .loadFromJSON(window.saveOperateList[state.operIndex - 1])
          .renderAll();
        if (window.deleteOperateList.includes(state.operIndex - 1)) {
        } else {
          window.deleteOperateList.push(state.operIndex);
          state.operIndex -= 1;
        }
      }
      card.saveLen = window.saveOperateList.length;
      card.deleLen = window.deleteOperateList.length;
    },
    // 查看保存
    svg() {
      let card = this.card;
      console.log(card.toSVG());
      let aa = card.toSVG();
      fabric.loadSVGFromString(aa, function(objects, options) {
        var obj = fabric.util.groupSVGElements(objects, options);
        card.add(obj).renderAll();
      });
    },
    del() {
      var el = this.card.getActiveObject();
      this.card.remove(el);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>