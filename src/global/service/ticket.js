import request from "@/global/request/axios";
import API from "@/global/request/api";

const ticketService = {
  list: function(params) {
    return request.get(API.ticket, params);
  },
  insert: function(params) {
    return request.post(API.ticket, params);
  },
  wxcode: function(id) {
    return request.get(API.wxcode(id));
  }
};

export default ticketService;
