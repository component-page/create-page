<template>
  <div>
    <div class="all">
      <div class="list">
        <el-radio
          v-model="radio1"
          :disabled="item.disabled"
          :border="item.border"
          :size="item.size"
          @change="chooseEl(item)"
          v-for="(item) in elList"
          :key="item.label"
          :label="item.label"
        >{{item.name}}</el-radio>
      </div>

      <div class="cover">
        <ElRadios v-show="chooseElComp=='Radio 单选框'" :radioList="radioList"></ElRadios>
        <ElCheckboxs v-show="chooseElComp=='Checkbox 多选框'" :checkboxList="checkboxList"></ElCheckboxs>
        <!--   el-radio封装 应该开个组件页面
        -->
        <!-- <el-radio
          v-model="radio"
          :disabled="item.disabled"
          :border="item.border"
          :size="item.size"
          v-for="(item) in radioList"
          :key="item.label"
          :label="item.label"
        >{{item.name}}</el-radio>-->
        <div class="changeModel">
          <el-input
            @blur="blur"
            type="textarea"
            :autosize="{ minRows: 4}"
            placeholder="请输入内容"
            v-model="textarea2"
          ></el-input>
        </div>
      </div>
    </div>
    <el-button type="primary" @click="addsC">添加</el-button>
  </div>
</template>

<script>
import ElRadios from "../packages/el-radio";
import ElCheckboxs from "../packages/el-checkbox";
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  name: "",
  components: {
    ElRadios,
    ElCheckboxs
  },
  data() {
    return {
      radio: "1",
      checkboxGroup1: ["上海"],
      elList: [
        {
          name: "Radio 单选框",
          label: "1",
          disabled: false,
          border: true,
          size: "small"
        },
        {
          name: "Checkbox 多选框",
          label: "2",
          disabled: false,
          border: true,
          size: "small"
        }
      ],
      chooseElComp: "Radio 单选框",
      radio1: "1",
      radioList: [
        {
          name: "备选框",
          label: "1",
          disabled: false,
          border: false,
          size: "small",
          type:"button"
        }
      ],
      checkboxList: [],
      textarea2: ` radioList: [
        {
          name: "备选框",
          label: "1",
          disabled: false,
          border: false,
          size: "small",
          type:"button"
        }
      ]`,
      cities: cityOptions
    };
  },
  methods: {
    addsC() {
      this.$emit("addsC",{
        name:"radio",
        data:this.radioList,
        methods:null
      })
    },
    chooseEl(item) {
      this.chooseElComp = item.name;
      switch (item.label) {
        case "1":
          this.textarea2 = `radioList: [
        {
          name: "备选框",
          label: "1",
          disabled: false,
          border: false,
          size: "small",
          type:"button"
        }
      ]`;

          break;
        case "2":
          this.textarea2 = "'" + this.checkboxList + "'";
          break;
      }
      // this.textarea2 = this.checkboxList
    },
    blur() {
      console.log(this.textarea2);

      let index = this.textarea2.trim().indexOf(":") + 1;
      let str = this.textarea2.trim().slice(index);

      // let func = new Function("return (" + str + ");");
      let func = new Function("return " + str + "");
      // let arr = func();
      this.radioList = func();
      console.log(this.radioList);
    }
  }
};
</script>

<style scoped>
.all {
  display: flex;
}
.cover {
  flex: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin-left: 6px;
  padding: 3px;
}
.changeModel {
  margin-top: 6px;
}
.all .list {
  font-size: 14px;
  margin: 2px 4px;
  display: flex;
  flex-direction: column;
}
.list li {
  cursor: pointer;
}
.list li:hover {
  color: #40a0ff8c;
}
.choose {
  color: #409eff;
}
.list .el-radio.is-bordered + .el-radio.is-bordered {
  margin-top: 6px;
  margin-left: 0;
}
.el-button {
  width: 100%;
}
</style>
