// const PREFIX = "http://localhost:3001/api";
const PREFIX = "https://api.lifetour.com.cn/api";

const API = {
  authLogin: `${PREFIX}/auth/login`,
  manager: `${PREFIX}/manager`,
  managerItem: id => `${PREFIX}/manager/${id}`,
  order: `${PREFIX}/order`,
  orderItem: id => `${PREFIX}/order/${id}`,
  goods: `${PREFIX}/goods`,
  goodsItem: id => `${PREFIX}/goods/${id}`,
  ticket: `${PREFIX}/ticket`,
  wxcode: id => `${PREFIX}/ticket/${id}/qrcode`,
  orderExpress: id => `${PREFIX}/order/${id}/express`,
  expressSearch: `${PREFIX}/common/express/search`,
  company: `${PREFIX}/company`,
  companyItem: id => `${PREFIX}/company/${id}`,
  qiniuToken: `${PREFIX}/qiniu/token`,
  qiniuUrl: "http://up-z1.qiniup.com"
};

export default API;
