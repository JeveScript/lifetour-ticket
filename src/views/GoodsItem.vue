<template>
  <div class="page-container">
    <v-breadcrumb title="编辑产品" />
    <div class="page-content" v-loading="loading">
      <el-form
        :model="formData"
        :rules="rules"
        ref="goodsForm"
        label-position="left"
        label-width="160px"
      >
        <h3>产品信息</h3>
        <el-form-item label="产品名称" prop="name" style="width:460px;">
          <el-input v-model="formData.name" placeholder="请输入产品名称" />
        </el-form-item>
        <el-form-item
          label="联系电话"
          prop="contact_phone"
          style="width:460px;"
        >
          <el-input
            v-model="formData.contact_phone"
            placeholder="请输入联系电话"
          />
        </el-form-item>
        <el-form-item label="产品描述" prop="description" style="width:460px;">
          <el-input
            v-model="formData.description"
            placeholder="请输入产品描述"
          />
        </el-form-item>
        <el-form-item label="产品图片" style="width:460px;">
          <el-button
            type="primary"
            :loading="uploadLoading"
            plain
            size="small"
            @click="handleUpload"
          >
            {{ !formData.image_url ? "上传图片" : "修改图片" }}</el-button
          >
          <span class="goods-upload-tips">建议上传 750*360 尺寸图片</span>
          <img
            v-if="formData.image_url"
            :src="formData.image_url"
            class="goods-image"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            :disabled="disabled"
            :loading="disabled"
            @click="handleCreateGoods"
            >保存</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script type="text/javascript">
import Breadcrumb from "@/components/BasicBreadcrumb.vue";
import goodsService from "@/global/service/goods.js";
import qiniuService from "@/global/service/qiniu.js";

export default {
  data() {
    return {
      loading: true,
      disabled: false,
      rules: {
        name: [{ required: true, message: "请输入产品名称", trigger: "blur" }]
        // description: [{ required: true, message: "请输入产品描述", trigger: "blur" }],
        // contact_phone: [{ required: true, message: "请输入联系方式", trigger: "blur" }]
      },
      uploadLoading: false,
      formData: {
        name: "",
        description: "",
        contact_phone: "",
        image_url: ""
      }
    };
  },
  created() {
    let id = this.$route.params.id;
    goodsService
      .show(id)
      .then(res => {
        this.formData = res;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    handleCreateGoods() {
      this.$refs.goodsForm.validate(valid => {
        if (valid) {
          let id = this.$route.params.id;
          let params = {
            name: this.formData.name,
            description: this.formData.description,
            contact_phone: this.formData.contact_phone,
            image_url: this.formData.image_url
          };

          this.disabled = true;
          goodsService
            .update(id, params)
            .then(() => {
              this.$message.success("编辑成功");
              this.$router.push({ name: "Goods" });
            })
            .finally(() => {
              this.disabled = false;
            });
        }
      });
    },
    handleUpload() {
      let fileInput = document.createElement("input");
      fileInput.setAttribute("type", "file");
      fileInput.setAttribute("accept", "image/png, image/gif, image/jpeg");
      fileInput.addEventListener("change", () => {
        const file = fileInput.files[0];
        const key = "goods/" + Date.now() + "_" + file.name;
        this.uploadLoading = true;
        qiniuService
          .upload({ key, file })
          .then(res => {
            this.formData.image_url = res;
          })
          .finally(() => {
            this.uploadLoading = false;
          });
      });
      fileInput.click();
    }
  },
  components: {
    "v-breadcrumb": Breadcrumb
  }
};
</script>

<style type="text/css" lang="less" scoped>
.goods-image {
  width: 750/2px;
  height: 360/2px;
  margin-top: 8px;
}
.goods-upload-tips {
  font-size: 12px;
  color: #666;
  margin-left: 8px;
}
</style>
