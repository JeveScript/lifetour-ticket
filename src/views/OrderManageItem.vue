<template>
  <div class="page-container">
    <v-breadcrumb />
    <div class="page-content" v-loading="loading">
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
  </div>
</template>

<script type="text/javascript">
import Breadcrumb from "@/components/BasicBreadcrumb.vue";
import orderService from "@/global/service/order.js";

export default {
  data() {
    return {
      loading: false,
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
      activities: [
        {
          content: "快要到了",
          timestamp: "2019-09-15"
        },
        {
          content: "在路上了",
          timestamp: "2019-09-13"
        },
        {
          content: "开始发货",
          timestamp: "2019-09-11"
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
          if (res["Traces"].length) {
            let expressLog = res["Traces"].reverse();
            console.log(expressLog);
            this.expressLog = expressLog;
          }
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
