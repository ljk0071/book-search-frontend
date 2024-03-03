import axiosHandler from "../proxyHandler"

export default {
  searchBooks(params) {
    return axiosHandler('get', '/api/books', params);
  }
}