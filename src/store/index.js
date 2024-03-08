import { createStore } from 'vuex';

export default createStore({
   plugins: [
  ],
  state: {
    isLogin: false,
    userName: null,
  },
  getters: {
  },
  mutations: {
    isLogin: function (state, payload) {
      state.isLogin = payload;
    },    
    userName: function (state, payload) {
      state.userName = payload;
    },
    isLogout: function (state) {
      state.isLogin = false;
      state.userName = null;
    },
  },
  actions: {
    isLogin: function (context, payload) {
      context.commit('isLogin', payload);
    },
    userName: function (context, payload) {
      context.commit('userName', payload);
    },
    isLogout: function (context, payload) {
      context.commit('isLogout', payload);
    },
  },
  modules: {},
});
