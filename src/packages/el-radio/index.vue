<template>
  <div>
    <div v-for="(item) in radioLists" :key="item.label">
      <el-radio-group v-model="radio" :size="item.size">
        <el-radio
          v-if="!item.type||item.type!=='button'"
          :disabled="item.disabled"
          :border="item.border"
          :size="item.size"
          :label="item.label"
        >{{item.name}}</el-radio>

        <el-radio-button
          v-else
          :disabled="item.disabled"
          :size="item.size"
          :label="item.label"
        >{{item.name}}</el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    radioList: {
      default: [
        {
          name: "备选框",
          label: "1",
          disabled: false,
          border: false,
          size: "small",
          type: "button"
        }
      ],
      type: Array
    }
  },
  data() {
    return {
      radio: "1",
      radioLists: null
    };
  },
  created() {
    this.radioLists = this.radioList;
    console.log(this.radioList);
  },
  Mounted() {
    console.log(this.radioList);
  },
  watch: {
    radioList: {
      handler(oldval) {
        this.radioLists = oldval;
        console.log(this.radio);
      }
    }
  }
};
</script>

<style  scoped>
</style>
