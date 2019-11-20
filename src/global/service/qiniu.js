import request from "@/global/request/axios";
import API from "@/global/request/api";

export default {
  /*
   ** upload(params, progressHandle)
   **
   ** @params file            {file}       文件
   ** @params progressHandle  {function}   上传事件回调
   */
  async upload({ file, key }, progressHandle) {
    try {
      const tokenInfo = await this.fetchQiNiuToken();
      console.log(tokenInfo);
      // 上传七牛
      await this.uploadFileToQiNiu(
        {
          key,
          file,
          token: tokenInfo.uploadToken
        },
        progressHandle
      );
      return tokenInfo.domain + "/" + key;
    } catch (e) {
      throw e;
    }
  },
  /* 获取七牛的token和key
   **
   */

  fetchQiNiuToken() {
    return request.get(API.qiniuToken);
  },
  /* 发送文件到七牛上
   ** @params key               {string}       文件名
   ** @params token             {string}       空间
   ** @params file              {string}       文件夹
   ** @params onUploadProgress  {function}     上传回调
   */
  uploadFileToQiNiu({ token, file, key }, onUploadProgress) {
    const formData = new FormData();
    formData.append("token", token);
    formData.append("file", file);
    formData.append("key", key);
    const headers = { "Content-type": "multipart/form-data;" };
    return request.post(API.qiniuUrl, formData, {
      withCredentials: false,
      timeout: 60000,
      headers,
      onUploadProgress
    });
  }
};
