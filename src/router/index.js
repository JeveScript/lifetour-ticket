import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import {
  commonRoutes,
  matchAllRouter,
  fetchFilterPermissionRoutes
} from "./routes";
import DataStore from "@/global/storage/index";

Vue.use(Router);

const appRouter = new Router({
  mode: "history",
  routes: commonRoutes,
  // eslint-disable-next-line
    scrollBehavior (to, from, savedPosition) {
    return { y: 0 };
  }
});

appRouter.hasAddRouter = false;
// eslint-disable-next-line
appRouter.beforeEach(async (to, from, next) => {
  NProgress.start();
  if (to.meta.title) document.title = to.meta.title;
  const TOKEN = DataStore.getToken();
  if (!TOKEN && to.name !== "AccountLogin") {
    next({ name: "AccountLogin", replace: true });
    return;
  }

  if (!appRouter.hasAddRouter && TOKEN) {
    const filterRoutes = await fetchFilterPermissionRoutes();
    appRouter.hasAddRouter = true;
    appRouter.addRoutes(filterRoutes.concat(matchAllRouter));
    next({ ...to, replace: true });
  }

  next();
});

// eslint-disable-next-line
appRouter.afterEach((to, from) => {
  NProgress.done();
});

export default appRouter;
