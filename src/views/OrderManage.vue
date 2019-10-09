<template>
  <div class="page-container">
    <v-breadcrumb />
    <div class="page-content" v-loading="loading">
      <div>
        <el-form inline label-width="100px">
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
          <br />
          <el-form-item label="收件人姓名">
            <el-input
              v-model="form.address_name"
              placeholder="请输入收件人姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="收件人手机号">
            <el-input
              v-model="form.address_phone"
              placeholder="请输入收件人手机号"
            ></el-input>
          </el-form-item>
          <div>
            <el-form-item>
              <el-button type="primary" @click="getData">查询</el-button>
              <el-button @click="handleReset">重置</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="created_at" label="兑换时间"> </el-table-column>
        <el-table-column prop="findex" label="卡券号码"> </el-table-column>
        <el-table-column prop="address_name" label="收件人"> </el-table-column>
        <el-table-column
          prop="address_phone"
          label="联系方式"
        ></el-table-column>
        <el-table-column prop="express_number" label="快递单号">
          <template slot-scope="scope">
            {{ scope.row.express_number || "未发货" }}
          </template>
        </el-table-column>
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
      <div>
        <el-pagination
          v-if="pagination.total > pagination.pageSize"
          style="margin-top:16px;"
          background
          layout="prev, pager, next"
          :current-page.sync="pagination.currentPage"
          :page-size="pagination.pageSize"
          :total="pagination.total"
          @current-change="getData"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Breadcrumb from "@/components/BasicBreadcrumb.vue";
import orderService from "@/global/service/order.js";

export default {
  data() {
    return {
      loading: true,
      form: {
        address_name: "",
        address_phone: "",
        express_number: "",
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
      tableData: [],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let params = {
        current_page: this.pagination.currentPage,
        page_size: this.pagination.pageSize,
        status: this.form.status,
        address_name: this.form.address_name,
        address_phone: this.form.address_phone,
        express_number: this.form.express_number,
        findex: this.form.findex
      };

      let formDate = this.form.date;
      if (formDate.length) {
        params.start_at = formDate[0];
        params.end_at = formDate[1];
      }
      this.loading = true;
      orderService
        .list(params)
        .then(res => {
          this.tableData = res.datas;
          this.pagination.pageSize = Number(res.pagination.page_size);
          this.pagination.currentPage = Number(res.pagination.current_page);
          this.pagination.total = Number(res.pagination.total);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    handleReset() {
      this.form.status = "";
      this.form.address_name = "";
      this.form.address_phone = "";
      this.form.express_number = "";
      this.form.findex = "";
      this.form.date = [];
      this.pagination.currentPage = 1;
      this.getData();
    },
    statusDisplay(status) {
      const statusDisplay = ["未消核", "已消核"];
      return statusDisplay[status];
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
