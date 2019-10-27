<template>
  <div class="page-container">
    <v-breadcrumb />
    <div class="page-content" v-loading="loading">
      <el-form
        :model="formData"
        :rules="rules"
        ref="userForm"
        label-position="left"
        label-width="160px"
      >
        <h3>子管理员信息</h3>
        <el-form-item label="角色" prop="admin" style="width:460px;">
          <el-select v-model="formData.role" placeholder="请选择角色">
            <el-option label="总管理员" :value="1" />
            <el-option label="子管理员" :value="2" />
          </el-select>
        </el-form-item>
        <el-form-item
          label="公司"
          prop="company"
          style="width:460px;"
          v-if="formData.role === 2"
        >
          <el-select v-model="formData.company_id" placeholder="请选择公司">
            <el-option
              v-for="item in companys"
              :label="item.name"
              :value="item.id"
              :key="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="真实姓名" prop="name" style="width:460px;">
          <el-input v-model="formData.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="手机号码" prop="phone" style="width:460px;">
          <el-input v-model="formData.phone" placeholder="请输入手机号码" />
        </el-form-item>
        <el-form-item label="密码" prop="phone" style="width:460px;">
          <el-input
            v-model="formData.password"
            type="password"
            show-password
            placeholder="请输入管理员密码"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="handleCreateManager"
            :disabled="disabled"
            >添加</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script type="text/javascript">
import Breadcrumb from "@/components/BasicBreadcrumb.vue";
import managerService from "@/global/service/manager.js";
import companyService from "@/global/service/company.js";

export default {
  data() {
    return {
      disabled: false,
      loading: false,
      companys: [],
      rules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "目前只支持中国大陆的手机号码",
            trigger: "blur"
          }
        ],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        role: [{ required: true, message: "请输入角色", trigger: "blur" }]
      },
      formData: {
        name: "",
        phone: "",
        password: "",
        role: "",
        company_id: ""
      }
    };
  },
  created() {
    companyService.list().then(res => {
      this.companys = res;
    });
  },
  methods: {
    handleCreateManager() {
      this.$refs.userForm.validate(valid => {
        if (valid) {
          let params = {
            name: this.formData.name,
            phone: this.formData.phone,
            password: this.formData.password,
            role: this.formData.role,
            company_id: this.formData.role === 2 ? this.formData.company_id : 0
          };
          this.disabled = true;
          managerService
            .create(params)
            .then(() => {
              this.$message.success("创建成功");
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
