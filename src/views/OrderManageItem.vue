<template>
  <div class="page-container">
    <v-breadcrumb />
    <div class="page-content" v-loading="loading">
      <div class="mb-20">
        <el-button
          type="primary"
          plain
          style="float: right;"
          @click="handleLink"
          >编辑</el-button
        >
      </div>
      <h3 class="sub-title">订单信息</h3>
      <div class="page-info">
        <el-row :gutter="20">
          <el-col :span="8">卡券编号：{{ orderInfo.id }} </el-col>
          <el-col :span="8"
            >创建时间：{{ orderInfo.created_at_display }}</el-col
          >
          <el-col :span="8">订单状态：{{ orderInfo.status_display }} </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"> 快递编号：{{ orderInfo.express }} </el-col>
        </el-row>
      </div>
      <h3 class="sub-title">用户信息</h3>
      <div class="page-info">
        <el-row :gutter="20">
          <el-col :span="8"> 姓名：{{ userInfo.name }} </el-col>
          <el-col :span="8"> 电话：{{ userInfo.phone_number }} </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"> 地址：{{ userInfo.address }} </el-col>
        </el-row>
      </div>
      <h3 class="sub-title">物流信息</h3>
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          type="primary"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script type="text/javascript">
import Breadcrumb from "@/components/BasicBreadcrumb.vue";

export default {
  data() {
    return {
      loading: false,
      orderInfo: {
        id: 1231231233,
        price: 96,
        status: 1,
        status_display: "未付款",
        express: 234234234,
        express_price: 10,
        created_at_display: "2019-05-22 14:20"
      },
      userInfo: {
        name: "杨十一",
        phone_number: "17611181930",
        address: "北京市朝阳区通惠河北路 10 号大望路电影产业园 1-15 "
      },
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
  methods: {
    handleLink() {
      this.$router.push({ name: "OrderManageEdit", params: { id: 1 } });
    }
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
