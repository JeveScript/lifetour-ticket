<template>
  <div class="page-container">
    <v-breadcrumb />
    <div class="page-content" v-loading="loading">
      <div>
        <el-form inline label-width="80px">
          <el-form-item label="时间：">
            <el-date-picker
              v-model="form.date"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd"
              :picker-options="pickerOptions"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="类型：">
            <el-select v-model="form.status">
              <el-option label="待处理" :value="0" />
              <el-option label="已发货" :value="1" />
              <el-option label="已完成" :value="2" />
              <el-option label="退换中" :value="3" />
            </el-select>
          </el-form-item>
          <el-form-item label="卡券号码">
            <el-input
              v-model="form.findex"
              placeholder="请输入卡券号码"
            ></el-input>
          </el-form-item>
          <div>
            <el-form-item>
              <el-button type="primary">搜索</el-button>
              <el-button type="primary" plain>重置</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="created_at_display" label="兑换时间">
        </el-table-column>
        <el-table-column prop="id" label="卡券号码"> </el-table-column>
        <el-table-column prop="name" label="收件人"> </el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            {{ statusDisplay(scope.row.status) }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="handleShowOrder(scope.row)"
              >查看详情</el-button
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
      form: {
        findex: "",
        status: "",
        date: []
      },
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      tableData: [
        {
          id: 1231231233,
          name: "Jax",
          status: 1,
          express: 234234234,
          created_at_display: "2019-05-22 14:20"
        },
        {
          id: 3453245245,
          name: "Joe",
          status: 2,
          express: 234234234,
          created_at_display: "2019-05-22 14:20"
        },
        {
          id: 23452345234,
          name: "Joey",
          status: 3,
          express: 234234234,
          created_at_display: "2019-05-22 14:20"
        },
        {
          id: 235523545234,
          name: "July",
          status: 4,
          express: 234234234,
          created_at_display: "2019-05-22 14:20"
        }
      ]
    };
  },
  methods: {
    statusDisplay(status) {
      const statusDisplay = ["待处理", "已发货", "已完成", "退换中"];
      return statusDisplay[status - 1];
    },
    handleShowOrder(row) {
      const { id } = row;
      this.$router.push({
        name: "OrderManageItem",
        params: { id }
      });
    }
  },
  components: {
    "v-breadcrumb": Breadcrumb
  }
};
</script>

<style type="text/css" lang="less"></style>
