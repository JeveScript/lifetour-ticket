<template>
  <div class="page-container">
    <v-breadcrumb title="编辑管理员" />
    <div class="page-content" v-loading="loading">
      <el-form
        :model="formData"
        :rules="rules"
        ref="userForm"
        label-position="left"
        label-width="160px"
      >
        <h3>子管理员信息</h3>
        <el-form-item label="真实姓名" prop="name" style="width:460px;">
          <el-input v-model="formData.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="手机号" prop="phone" style="width:460px;">
          <el-input v-model="formData.phone" placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            :disabled="disabled"
            :loading="disabled"
            @click="handleCreateManager"
            >保存</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script type="text/javascript">
import Breadcrumb from "@/components/BasicBreadcrumb.vue";
import managerService from "@/global/service/manager.js";

export default {
  data() {
    return {
      loading: true,
      disabled: false,
      rules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "目前只支持中国大陆的手机号码",
            trigger: "blur"
          }
        ],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }]
      },
      formData: {
        name: "",
        phone: ""
      }
    };
  },
  created() {
    let id = this.$route.params.id;
    managerService
      .show(id)
      .then(res => {
        this.formData = res;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    handleCreateManager() {
      this.$refs.userForm.validate(valid => {
        if (valid) {
          let id = this.$route.params.id;
          let params = {
            name: this.formData.name,
            phone: this.formData.phone,
            password: this.formData.password
          };

          this.disabled = true;
          managerService
            .update(id, params)
            .then(() => {
              this.$message.success("编辑成功");
              this.$router.push({ name: "SettingManager" });
            })
            .finally(() => {
              this.disabled = false;
            });
        }
      });
    }
  },
  components: {
    "v-breadcrumb": Breadcrumb
  }
};
</script>

<style type="text/css" lang="less" scoped></style>
