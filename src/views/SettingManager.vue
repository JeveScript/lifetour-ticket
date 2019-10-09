<template>
  <div class="page-container">
    <v-breadcrumb />
    <div class="page-content" v-loading="loading">
      <div class="mb-20">
        <el-button type="primary" @click="handleLinkManagerCreate"
          >添加管理员</el-button
        >
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="phone" label="账户"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="handleEditManager(scope.row)"
              >编辑</el-button
            >
            <el-divider direction="vertical"></el-divider>
            <el-button
              type="text"
              @click="handleDeleteManager(scope.row, scope.$index)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
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
      tableData: []
    };
  },
  created() {
    managerService
      .list()
      .then(res => {
        this.tableData = res;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    handleLinkManagerCreate() {
      this.$router.push({ name: "SettingManagerCreate" });
    },
    handleEditManager(row) {
      const { id } = row;
      this.$router.push({
        name: "SettingManagerEdit",
        params: { id }
      });
    },
    handleDeleteManager(row, index) {
      const { name, id } = row;
      this.$confirm(`此操作将永久删除该${name}管理员, 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        managerService.delete(id).then(() => {
          this.$message.success("删除成功！");
          this.tableData.splice(index, 1);
        });
      });
    }
  },
  components: {
    "v-breadcrumb": Breadcrumb
  }
};
</script>

<style type="text/css" lang="less" scoped></style>
