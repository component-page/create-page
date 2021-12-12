<template>   

  <div id="app">
   <h3 style="margin-bottom:16px">
      页面组装
    </h3>
    <router-view />
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  padding: 30px;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}
.choose_children{
  box-shadow: 0 0 1px 1px #409eff;
  transition:  all .3s;
}
</style>
