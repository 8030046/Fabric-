<!-- 招生计划查询 -->
<template>
  <div>
    <div v-for="(i,v) in list" :key="v">{{i.name}}</div>
    <ul>
      <!-- <li v-for="user in activeUsers" :key="user.id">{{ user.name }}</li> -->
    </ul>
    <p>Reversed message: "{{ reversedMessage }}"</p>
    <p>message:{{message}}</p>
    <canvas id="canvas" width="350" height="200"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reversedMessage: "12",
      message: "",
      list: [
        { name: "阿萨德", cash: 100 },
        { name: "阿萨德02", cash: 200 },
        { name: "阿萨德03", cash: 300 },
        { name: "阿萨德04", cash: 400 }
      ]
    };
  },
  computed: {
    reversedMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  mounted() {
    var canvas = new fabric.Canvas("canvas");
    var rect = new fabric.Rect();

    canvas.add(rect); // 添加对象

    canvas.item(0); // 源于刚刚添加的第一个矩形对象
    canvas.getObjects(); // 获取所有对象（只有一个矩形）

    canvas.add(rect); // 移除这个矩形
  },

  methods: {}
};
</script>
<style lang='scss' scoped>
</style>