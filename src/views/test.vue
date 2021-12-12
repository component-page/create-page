<template>
  <div class="home">
    <div
      class="view"
      id="view"
      @click="chooseViewChange"
      :style="{
      width:viewWidth + 'px',
      height:viewHeight + 'px'
    }"
    >
      <div v-html="viewShowPage" class="viewShowPage"></div>
    </div>

    <el-tabs style="flex:1" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="页面" name="first">
        <PlusPage @page="addPage"></PlusPage>
      </el-tab-pane>
      <el-tab-pane label="组件" name="second">
        <PlusComp @addsC="addsC"></PlusComp>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import PlusPage from "../components/PlusPage";
import PlusComp from "../components/PlusComp";
import ElRadios from "../packages/el-radio";
import { arrChangeStr, backFind } from "../util/index";
import Vue from "vue";
// @ is an alias to /src
// import ShowsPage from "../../addfile/test";
/*  
 viewPage
  ROW 是数组 
  column 对象 {
    tag:"DIV",
    STYLE:{

    },
    CONTENT:childern|| content
  }
  */
export default {
  name: "Home",
  components: {
    PlusPage,
    PlusComp,
    ElRadios
  },
  data() {
    return {
      template: null,
      oldTag: null, //上一个老的dom节点
      targetPosi: null,
      viewShowPage: "",
      viewPage: [],
      viewWidth:
        (document.body.clientWidth || document.documentElement.clientWidth) / 2,
      viewHeight:
        (document.body.clientHeight || document.documentElement.clientHeight) /
        2,
      activeName: "first"
    };
  },
  watch: {
    // viewPage: {
    //   handler(newPage) {
    //     console.log(arrChangeStr(newPage));
    //     this.viewShowPage = arrChangeStr(newPage);
    //   },
    //   deep: true
    // }
  },
  methods: {
    chooseViewChange(e) {
      this.oldTag && this.oldTag.classList.remove("choose_children");
      this.oldTag = e.target;
      e.target.classList.add("choose_children");
      this.targetPosi = backFind(e.target).slice(1) || "";
    },
    handleClick() {},
    addsC(e) {
      if (this.oldTag) {
        let arr = this.targetPosi.trim().split(",");
        let i = arr.length;
        if (this.targetPosi == "") {
          console.log(this.viewPage, "%%");
          this.viewShowPage = `<div id="singleC"></div>`;
          this.viewPage.push({
            tag: "div",
            style: null,
            content: `<ElRadios :radioList="radioList"></ElRadios>`
          });
          console.log(arrChangeStr(this.viewPage));
          this.template = arrChangeStr(this.viewPage);
          console.log(this.template);
          setTimeout(() => {
            new Vue({
              el: "#singleC",
              // template: this.template,
              template: `<ElRadios :radioList="radioList"></ElRadios>`,
              components: {
                ElRadios
              },
              // render: h => h(ElRadios),
              data: {
                radioList: e.data
              }
            });
          }, 1200);
        } else if (i == 1) {
          console.log(this.viewPage[arr[0]]);
          this.viewPage[arr[0]].content.push(e);
        } else if (i == 2) {
          this.viewPage[arr[0]].content[arr[1]].content.push(e);
        } else if (i == 3) {
          this.viewPage[arr[0]].content[arr[1]].content[arr[2]].content.push(e);
        }
      } else {
        this.viewPage.push(e);
      }
      console.log(e);
      switch (e.name) {
        case "radio":
          break;
      }
    },
    updated(val) {
      console.log(val);
    },
    addPage(e) {
      console.log(e);
      if (this.oldTag) {
        let arr = this.targetPosi.trim().split(",");
        let i = arr.length;
        if (this.targetPosi == "") {
          this.viewPage.push(e);
        } else if (i == 1) {
          console.log(this.viewPage[arr[0]]);
          this.viewPage[arr[0]].content.push(e);
        } else if (i == 2) {
          this.viewPage[arr[0]].content[arr[1]].content.push(e);
        } else if (i == 3) {
          this.viewPage[arr[0]].content[arr[1]].content[arr[2]].content.push(e);
        }
      } else {
        this.viewPage.push(e);
      }

      // if (this.viewPage.length < 1) {

      // }
    }
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        let dom = document.body || document.documentElement;
        this.viewWidth = dom.clientWidth / 2;
        this.viewHeight = dom.clientHeight / 2;
      })();
    };
  }
};
</script>
<style scoped>
.home {
  display: flex;
}
.view {
  border: 1px solid #40a0ff9a;
  margin-right: 20px;
}
</style>
