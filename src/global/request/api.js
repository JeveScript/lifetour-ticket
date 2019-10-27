// const PREFIX = "http://localhost:3001/api";
const PREFIX = "https://api.lifetour.com.cn/api";

const API = {
  authLogin: `${PREFIX}/auth/login`,
  manager: `${PREFIX}/manager`,
  managerItem: id => `${PREFIX}/manager/${id}`,
  order: `${PREFIX}/order`,
  orderItem: id => `${PREFIX}/order/${id}`,
  orderExpress: id => `${PREFIX}/order/${id}/express`,
  expressSearch: `${PREFIX}/common/express/search`,
  company: `${PREFIX}/company`,
  companyItem: id => `${PREFIX}/company/${id}`
};

export default API;
