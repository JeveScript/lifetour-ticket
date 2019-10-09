const PREFIX = "http://localhost:3001/api";
// const PREFIX = "/api";

const API = {
  authLogin: `${PREFIX}/auth/login`,
  manager: `${PREFIX}/manager`,
  managerItem: id => `${PREFIX}/manager/${id}`,
  order: `${PREFIX}/order`,
  orderItem: id => `${PREFIX}/order/${id}`,
  expressSearch: `${PREFIX}/common/express/search`
};

export default API;
