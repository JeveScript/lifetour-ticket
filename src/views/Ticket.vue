<template>
  <div class="page-container">
    <v-breadcrumb />
    <div class="page-content" v-loading="loading">
      <div class="mb-20">
        <el-button
          type="primary"
          plain
          @click="handleShowDialog"
          style="float: right;"
          >生成卡券</el-button
        >
      </div>
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
          <el-form-item label="公司：">
            <el-select v-model="form.goods_id" placeholder="请选择产品">
              <el-option
                v-for="item in goods"
                :label="item.name"
                :value="item.id"
                :key="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="兑换情况：">
            <el-select v-model="form.status">
              <el-option label="未兑换" :value="0" />
              <el-option label="已兑换" :value="1" />
            </el-select>
          </el-form-item>
          <el-form-item label="卡券号码">
            <el-input
              v-model="form.findex"
              placeholder="请输入卡券号码"
            ></el-input>
          </el-form-item>
          <div>
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
          </div>
          <div>
            <el-form-item>
              <el-button type="primary" @click="getData">查询</el-button>
              <el-button @click="handleReset">重置</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="goods_name" label="产品" />
        <el-table-column prop="company_name" label="所属公司" />
        <el-table-column prop="findex" label="卡号" />
        <el-table-column prop="start_at" label="生效时间" />
        <el-table-column prop="end_at" label="过期时间" />
        <el-table-column label="电子卡">
          <template slot-scope="scope">
            <el-link
              type="primary"
              @click="handleDownLoadImage(scope.row.id, scope.row.findex)"
              >下载</el-link
            >
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status">已兑换</el-tag>
            <el-tag v-else type="danger">未兑换</el-tag>
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

    <el-dialog title="卡券生成" :visible.sync="dialogFormVisible">
      <el-form
        :model="dialogForm"
        ref="dialogForm"
        :rules="rules"
        class="ticket-dialogForm"
      >
        <el-form-item
          label="产品"
          prop="goods_id"
          :label-width="formLabelWidth"
        >
          <el-select v-model="dialogForm.goods_id" placeholder="请选择产品">
            <el-option
              v-for="item in goods"
              :label="item.name"
              :value="item.id"
              :key="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="数量" prop="number" :label-width="formLabelWidth">
          <el-input
            v-model="dialogForm.number"
            type="number"
            placeholder="请输入卡券数量"
          >
            <template slot="append"
              >张</template
            >
          </el-input>
        </el-form-item>
        <el-form-item
          label="生效时间"
          prop="start_at"
          :label-width="formLabelWidth"
        >
          <el-date-picker
            v-model="dialogForm.start_at"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item
          label="有效年限"
          prop="period"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="dialogForm.period"
            type="number"
            placeholder="请输入卡券有效年限"
          >
            <template slot="append"
              >年</template
            >
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAddTicket">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/javascript">
import Breadcrumb from "@/components/BasicBreadcrumb.vue";
import ticketService from "@/global/service/ticket.js";
import companyService from "@/global/service/company.js";
import DataStore from "@/global/storage/index";
import goodsService from "@/global/service/goods.js";

export default {
  data() {
    return {
      loading: false,
      companySelect: false,
      companys: [],
      goods: [],
      form: {
        company_id: "",
        goods_id: "",
        status: "",
        findex: "",
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
      },
      rules: {
        goods_id: [{ required: true, message: "请选择产品", trigger: "blur" }],
        number: [
          { required: true, message: "请输入卡券数量", trigger: "blur" }
        ],
        start_at: [
          { required: true, message: "请输入生效时间", trigger: "blur" }
        ],
        period: [
          { required: true, message: "请输入卡券有效年限", trigger: "blur" }
        ]
      },
      dialogFormVisible: false,
      formLabelWidth: "120px",
      dialogForm: {
        goods_id: "",
        number: "",
        start_at: "",
        period: 2
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
      Promise.all([
        companyService.list(),
        goodsService.list({
          company_id: this.form.company_id,
          page_size: 100
        })
      ]).then(res => {
        this.companys = res[0];
        this.goods = res[1].datas;
      });
    },
    getData() {
      let params = {
        current_page: this.pagination.currentPage,
        page_size: this.pagination.pageSize,
        company_id: this.form.company_id,
        goods_id: this.form.goods_id,
        status: this.form.status
      };

      let formDate = this.form.date;
      if (formDate.length) {
        params.start_at = formDate[0];
        params.end_at = formDate[1];
      }

      this.loading = true;
      ticketService
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
      this.form.goods_id = "";
      this.form.status = "";
      this.form.findex = "";
      this.getData();
    },
    handleShowDialog() {
      this.dialogFormVisible = true;
      this.dialogForm.period = 2;
      this.dialogForm.goods_id = "";
      this.dialogForm.number = "";
      this.dialogForm.start_at = "";
    },
    handleAddTicket() {
      this.$refs.dialogForm.validate(valid => {
        if (valid) {
          this.dialogFormVisible = false;
          this.loading = false;
          let params = {
            period: this.dialogForm.period,
            goods_id: this.dialogForm.goods_id,
            number: Number(this.dialogForm.number),
            start_at: this.formatDate(this.dialogForm.start_at)
          };

          ticketService.insert(params).then(() => {
            this.$message.success("创建成功");
            this.getData();
          });
        }
      });
    },
    formatDate(date) {
      const formatNumber = n => {
        n = n.toString();
        return n[1] ? n : "0" + n;
      };
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return [year, month, day].map(formatNumber).join("-");
    },
    handleDownLoadImage(id, findex) {
      ticketService.wxcode(id).then(res => {
        let link = document.createElement("a");
        link.setAttribute("download", "电子卡_" + findex + ".jpeg");
        link.setAttribute("href", res);
        link.click();
      });
    }
  },
  components: {
    "v-breadcrumb": Breadcrumb
  }
};
</script>

<style type="text/css" lang="less">
.ticket-dialogForm .el-input {
  width: 300px;
}
</style>
