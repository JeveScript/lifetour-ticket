<template>
  <div class="page-container">
    <v-breadcrumb />
    <div class="page-content" v-loading="loading">
      <div>
        <el-form inline label-width="100px">
          <el-form-item label="公司：" v-if="companySelect">
            <el-select v-model="form.company_id" placeholder="请选择公司">
              <el-option
                v-for="item in companys"
                :label="item.name"
                :value="item.id"
                :key="item.id"
              />
            </el-select>
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
        <el-table-column prop="company_name" label="所属公司">
        </el-table-column>
        <el-table-column prop="name" label="名称"> </el-table-column>
        <el-table-column prop="contact_phone" label="联系电话">
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
import goodsService from "@/global/service/goods.js";
import companyService from "@/global/service/company.js";
import DataStore from "@/global/storage/index";

export default {
  data() {
    return {
      loading: false,
      companySelect: false,
      companys: [],
      form: {
        company_id: ""
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
    let userInfo = DataStore.getUserInfo();
    if (userInfo.company_id) {
      this.form.company_id = userInfo.company_id;
    } else {
      this.getCompanys();
      this.companySelect = true;
    }
    this.getData();
  },
  methods: {
    getCompanys() {
      companyService.list().then(res => {
        this.companys = res;
      });
    },
    getData() {
      let params = {
        current_page: this.pagination.currentPage,
        page_size: this.pagination.pageSize,
        company_id: this.form.company_id
      };

      this.loading = true;
      goodsService
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
      this.pagination.currentPage = 1;
      if (this.companySelect) {
        this.form.company_id = "";
      }
      this.getData();
    },
    handleShowOrder(row) {
      const { id } = row;
      this.$router.push({
        name: "GoodsItem",
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
