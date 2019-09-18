import BasicLayout from "@/components/BasicLayout.vue";

//const Dashboard = () =>
//  import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue");

const OrderManage = () =>
  import(/* webpackChunkName: "order" */ "@/views/OrderManage.vue");
const OrderManageItem = () =>
  import(/* webpackChunkName: "order" */ "@/views/OrderManageItem.vue");
const OrderManageEdit = () =>
  import(/* webpackChunkName: "order" */ "@/views/OrderManageEdit.vue");
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
    meta: {
      breadcrumb: {
        title: "订单",
        replace: false
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
        permission: "order-manage",
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
        permission: "order-manage",
        component: OrderManageItem,
        meta: {
          title: `订单详情${defaultSuffixTitle}`,
          breadcrumb: {
            title: "订单详情"
          }
        }
      },
      {
        path: "/order/:id/edit",
        name: "OrderManageEdit",
        permission: "order-manage",
        component: OrderManageEdit,
        meta: {
          title: `订单编辑${defaultSuffixTitle}`,
          breadcrumb: {
            title: "订单编辑"
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
