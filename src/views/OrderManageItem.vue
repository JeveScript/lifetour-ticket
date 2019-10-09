<template>
  <div class="page-container">
    <v-breadcrumb />
    <div class="page-content" v-loading="loading">
      <div class="mb-20">
        <el-button
          style="float: right;"
          type="primary"
          plain
          @click="handleDialogShow"
          >{{ orderInfo.express_number ? "修改快递单号" : "发货" }}</el-button
        >
      </div>
      <h3 class="sub-title">订单信息</h3>
      <div class="page-info">
        <el-row :gutter="20">
          <el-col :span="8">卡券编号：{{ orderInfo.findex }} </el-col>
          <el-col :span="8">创建时间：{{ orderInfo.created_at }}</el-col>
          <el-col :span="8"
            >订单状态：{{ orderInfo.express_number ? "已发货" : "未发货" }}
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            快递公司：{{ orderInfo.express_company || "未发货" }}
          </el-col>
          <el-col :span="8">
            快递编号：{{ orderInfo.express_number || "未发货" }}
          </el-col>
        </el-row>
      </div>
      <el-divider></el-divider>
      <h3 class="sub-title">收件人信息</h3>
      <div class="page-info">
        <el-row :gutter="20">
          <el-col :span="8"> 姓名：{{ orderInfo.address_name }} </el-col>
          <el-col :span="8"> 电话：{{ orderInfo.address_phone }} </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"> 地址：{{ orderInfo.address_detail }} </el-col>
        </el-row>
      </div>
      <el-divider></el-divider>
      <h3 class="sub-title">物流信息</h3>
      <div v-if="!expressLog.length" style="color: #999;font-size: 12px;">
        暂无物流信息
      </div>
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in expressLog"
          :key="index"
          type="primary"
          :timestamp="activity.AcceptTime"
        >
          {{ activity.AcceptStation }}
        </el-timeline-item>
      </el-timeline>
    </div>

    <el-dialog title="修改快递单号" :visible.sync="dialogVisible" width="30%">
      <el-form label-position="right" inline label-width="120px">
        <el-form-item label="快递公司：">
          <el-select
            v-model="expressForm.express_code"
            placeholder="请选择快递公司"
          >
            <el-option
              v-for="item in expressCompany"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="快递单号：">
          <el-input
            v-model="expressForm.express_number"
            placeholder="请输入快递单号"
          />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleUpdateExpress">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/javascript">
import Breadcrumb from "@/components/BasicBreadcrumb.vue";
import orderService from "@/global/service/order.js";

export default {
  data() {
    return {
      loading: false,
      dialogVisible: false,
      orderInfo: {
        address_detail: "",
        address_name: "",
        address_phone: "",
        created_at: "",
        express_code: "",
        express_company: "",
        express_number: "",
        findex: "",
        id: 1
      },
      expressLog: [],
      expressForm: {
        express_code: "",
        express_number: ""
      },
      expressCompany: [
        {
          id: "DBL",
          name: "德邦快递"
        },
        {
          id: "STO",
          name: "申通快递"
        },
        {
          id: "ZTO",
          name: "中通快递"
        },
        {
          id: "YD",
          name: "韵达速递"
        }
      ]
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let id = this.$route.params.id;
      orderService.show(id).then(res => {
        this.orderInfo = res;
        if (res.express_number && res.express_code) {
          this.getExpressWay(res.express_number, res.express_code);
        }
      });
    },
    getExpressWay: function(express_number, express_code) {
      orderService
        .expressSearch({
          express_number,
          express_code
        })
        .then(res => {
          let expressLog = res["Traces"].reverse();
          this.expressLog = expressLog;
        });
    },
    handleDialogShow: function() {
      this.dialogVisible = true;
      this.expressForm.express_code = this.orderInfo.express_code;
      this.expressForm.express_number = this.orderInfo.express_number;
    },
    handleUpdateExpress: function() {
      let id = this.$route.params.id;
      let express_code = this.expressForm.express_code;
      let express_number = this.expressForm.express_number;
      let express_company = this.expressCompany.find(
        data => data.id === express_code
      );
      if (express_company) {
        express_company = express_company.name;
      }

      if (!express_code || !express_number) {
        this.$message.error("请选择快递公司并填写快递单号");
        return;
      }

      this.loading = true;
      this.dialogVisible = false;
      console.log(express_code, express_number, express_company);

      orderService
        .expressUpdate(id, {
          express_code,
          express_number,
          express_company
        })
        .then(() => {
          this.orderInfo.express_code = express_code;
          this.orderInfo.express_number = express_number;
          this.$message.success("快递单号更新成功");
          this.getExpressWay(express_number, express_code);
        })
        .catch(() => {
          this.$message.error("快递单号更新失败，请联系技术人员检查");
        })
        .finally(() => {
          this.loading = false;
        });
    }
    // handleLink() {
    //   this.$router.push({ name: "OrderManageEdit", params: { id: 1 } });
    // }
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
