<template>
  <el-button :disabled="disabled" @click="handleClick">{{
    buttonName
  }}</el-button>
</template>

<script>
export default {
  data() {
    return {
      buttonName: "获取验证码",
      disabled: false
    };
  },
  methods: {
    handleClick() {
      if (this.disabled) {
        return;
      }
      this.disabled = true;
      this.$emit("click");
      let time = 60;
      this.buttonName = `(${time})秒重新发送`;
      const interval = window.setInterval(() => {
        time -= 1;
        this.buttonName = `(${time})秒重新发送`;
        if (time <= 0) {
          this.buttonName = "重新发送";
          this.disabled = false;
          window.clearInterval(interval);
        }
      }, 1000);
    }
  }
};
</script>
