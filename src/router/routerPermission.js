import BasicLayout from "@/components/BasicLayout.vue";

//const Dashboard = () =>
//  import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue");

const OrderManage = () =>
  import(/* webpackChunkName: "order" */ "@/views/OrderManage.vue");
const OrderManageItem = () =>
  import(/* webpackChunkName: "order" */ "@/views/OrderManageItem.vue");
const Goods = () => import(/* webpackChunkName: "goods" */ "@/views/Goods.vue");
const GoodsItem = () =>
  import(/* webpackChunkName: "goods" */ "@/views/GoodsItem.vue");
const Ticket = () =>
  import(/* webpackChunkName: "ticket" */ "@/views/Ticket.vue");
const SettingManager = () =>
  import(/* webpackChunkName: "setting" */ "@/views/SettingManager.vue");
const SettingManagerCreate = () =>
  import(/* webpackChunkName: "setting" */ "@/views/SettingManagerCreate.vue");
const SettingManagerEdit = () =>
  import(/* webpackChunkName: "setting" */ "@/views/SettingManagerEdit.vue");

const defaultSuffixTitle = " - 人生无限，增长无限";

const permissionRoutes = [
  {
    path: "/",
    name: "Dashboard",
    redirect: { name: "Order" }
  },
  {
    path: "/order",
    name: "Order",
    component: BasicLayout,
    redirect: { name: "OrderManage" },
    permission: "order-manage",
    meta: {
      breadcrumb: {
        title: "订单",
        replace: true
      },
      nav: {
        icon: "el-icon-tickets",
        title: "订单"
      }
    },
    children: [
      {
        path: "/order",
        name: "OrderManage",
        component: OrderManage,
        meta: {
          title: `订单${defaultSuffixTitle}`,
          breadcrumb: {
            title: "所有订单"
          }
        }
      },
      {
        path: "/order/:id",
        name: "OrderManageItem",
        component: OrderManageItem,
        meta: {
          title: `订单详情${defaultSuffixTitle}`,
          breadcrumb: {
            title: "订单详情"
          }
        }
      }
    ]
  },
  {
    path: "/ticket",
    name: "tickets",
    component: BasicLayout,
    redirect: { name: "Ticket" },
    permission: "ticket-manage",
    meta: {
      breadcrumb: {
        title: "卡券",
        replace: true
      },
      nav: {
        icon: "el-icon-s-ticket",
        title: "卡券"
      }
    },
    children: [
      {
        path: "/ticket",
        name: "Ticket",
        component: Ticket,
        meta: {
          title: `卡券${defaultSuffixTitle}`,
          breadcrumb: {
            title: "所有卡券"
          }
        }
      }
    ]
  },
  {
    path: "/goods",
    name: "goods",
    component: BasicLayout,
    redirect: { name: "Goods" },
    permission: "goods-manage",
    meta: {
      breadcrumb: {
        title: "产品",
        replace: true
      },
      nav: {
        icon: "el-icon-goods",
        title: "产品"
      }
    },
    children: [
      {
        path: "/goods",
        name: "Goods",
        component: Goods,
        meta: {
          title: `产品${defaultSuffixTitle}`,
          breadcrumb: {
            title: "所有产品"
          }
        }
      },
      {
        path: "/goods/:id",
        name: "GoodsItem",
        component: GoodsItem,
        meta: {
          title: `产品详情${defaultSuffixTitle}`,
          breadcrumb: {
            title: "产品详情"
          }
        }
      }
    ]
  },
  {
    path: "/setting",
    name: "Setting",
    component: BasicLayout,
    meta: {
      nav: {
        icon: "el-icon-setting",
        title: "设置"
      },
      breadcrumb: {
        title: "设置",
        replace: false
      }
    },
    children: [
      {
        path: "/setting/manager",
        name: "SettingManager",
        component: SettingManager,
        permission: "setting-manager",
        meta: {
          title: `管理员${defaultSuffixTitle}`,
          nav: {
            title: "管理员"
          },
          breadcrumb: {
            title: "管理员",
            replace: false
          }
        }
      },
      {
        path: "/setting/manager/create",
        name: "SettingManagerCreate",
        component: SettingManagerCreate,
        permission: "setting-manager",
        meta: {
          title: `添加子管理员${defaultSuffixTitle}`,
          breadcrumb: {
            title: "创建",
            replace: false
          }
        }
      },
      {
        path: "/setting/manager/:id/edit",
        name: "SettingManagerEdit",
        component: SettingManagerEdit,
        permission: "setting-manager",
        meta: {
          title: `编辑子管理员${defaultSuffixTitle}`,
          breadcrumb: {
            title: "编辑",
            replace: false
          }
        }
      }
    ]
  }
];

export default permissionRoutes;
