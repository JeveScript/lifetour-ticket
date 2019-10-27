import request from "@/global/request/axios";
import API from "@/global/request/api";
// import DataStore from "@/global/storage/index.js";

const companyService = {
  list: function() {
    return request.get(API.company);
  }
};

export default companyService;
