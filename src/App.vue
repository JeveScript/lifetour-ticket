<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  line-height: 1.5;
}
.page-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.mb-20 {
  margin-bottom: 20px;
}
.page-content {
  flex: 1;
  margin: 16px;
  padding: 16px;
  margin-bottom: 0;
  background-color: #fff;
  h3 {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 16px;
  }
}
</style>
