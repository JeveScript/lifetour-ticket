import request from "@/global/request/axios";
import API from "@/global/request/api";

const orderService = {
  list: function(params) {
    return request.get(API.order, params);
  },
  show: function(id) {
    return request.get(API.orderItem(id));
  },
  expressSearch: function(params) {
    return request.get(API.expressSearch, params);
  },
  expressUpdate: function(id, params) {
    return request.put(API.orderExpress(id), params);
  }
};

export default orderService;
