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
        style="width:560px;"
      >
        <h3>卡券信息</h3>
        <el-form-item label="卡券编号">
          1231231233
        </el-form-item>
        <el-form-item label="创建时间">
          2019-05-22 14:20
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="formData.status">
            <el-option label="待处理" :value="0" />
            <el-option label="已发货" :value="1" />
            <el-option label="已完成" :value="2" />
            <el-option label="退换中" :value="3" />
          </el-select>
        </el-form-item>
        <h3>物流信息</h3>
        <el-form-item label="收件人姓名">
          杨十一
        </el-form-item>
        <el-form-item label="收件人手机号">
          17611181930
        </el-form-item>
        <el-form-item label="收件人地址">
          北京市朝阳区通惠河北路 10 号大望路电影产业园 1-15
        </el-form-item>
        <el-form-item label="快递单号">
          <el-input placeholder="请输入快递单号" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script type="text/javascript">
import Breadcrumb from "@/components/BasicBreadcrumb.vue";

export default {
  data() {
    return {
      loading: false,
      rules: {
        status: [{ required: true, message: "请输入状态", trigger: "blur" }],
        express: [
          { required: true, message: "请输入物流编号", trigger: "blur" }
        ]
      },
      formData: {
        status: 0,
        express: ""
      }
    };
  },
  methods: {
    handleSubmit() {}
  },
  components: {
    "v-breadcrumb": Breadcrumb
  }
};
</script>

<style type="text/css" lang="less">
.page-info {
  font-size: 14px;
  line-height: 30px;
  color: #666;
  margin-bottom: 20px;
}
</style>
