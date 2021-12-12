<template>
  <div class="plus_pages">
    <el-select v-model="value" placeholder="请选择标签">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-input
      v-model="inputStyle"
      type="textarea"
      :autosize="{ minRows: 3, maxRows: 6}"
      placeholder="请输入样式"
    ></el-input>
    <el-button type="primary" @click="adds">添加</el-button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      input: "",
      inputStyle: "",
      options: [
        {
          value: "div",
          label: "div"
        },
        {
          value: "p",
          label: "p"
        },
        {
          value: "span",
          label: "span"
        }
      ],
      value: ""
    };
  },
  methods: {
    adds() {
      this.$emit("page", {
        tag: this.value,
        style: this.inputStyle,
        content: this.input || []
      });
    }
  }
};
</script>

<style  scoped>
.plus_pages {
  display: flex;
  flex-direction: column;
}
.el-input {
  margin: 20px 0;
}
.el-button {
  margin-top: 20px;
}
</style>
