<template>
  <div class="page-container">
    <v-breadcrumb title="所有管理员" />
    <div class="page-content" v-loading="loading">
      <div class="mb-20">
        <el-button type="primary" @click="handleLinkSettingManagerCreate"
          >添加管理员</el-button
        >
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="phone_number" label="账户"> </el-table-column>
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

export default {
  data() {
    return {
      loading: false,
      tableData: [
        {
          id: 4,
          phone_number: "13511111111",
          name: "Jax"
        },
        {
          id: 5,
          phone_number: "13522222222",
          name: "Jeo",
          role: 2
        },
        {
          id: 6,
          phone_number: "13533333333",
          name: "Jay"
        }
      ]
    };
  },
  methods: {
    handleLinkSettingManagerCreate() {
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
      const { name } = row;
      this.$confirm(`此操作将永久删除该${name}管理员, 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$message.success("删除成功！");
        this.tableData.splice(index, 1);
      });
    }
  },
  components: {
    "v-breadcrumb": Breadcrumb
  }
};
</script>

<style type="text/css" lang="less" scoped></style>
