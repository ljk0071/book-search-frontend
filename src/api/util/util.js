import axiosHandler from "../proxyHandler"

export default {
  actionLogin(params) {
    return axiosHandler('/login-api-url', params);
  }
}