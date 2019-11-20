import request from "@/global/request/axios";
import API from "@/global/request/api";

const goodsService = {
  list: function(params) {
    return request.get(API.goods, params);
  },
  show: function(id) {
    return request.get(API.goodsItem(id));
  },
  update: function(id, params) {
    return request.put(API.goodsItem(id), params);
  }
};

export default goodsService;
